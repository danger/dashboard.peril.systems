import * as React from "react"
import { Button, Dropdown, Feed, Segment } from "semantic-ui-react"
import relativeDate from "tiny-relative-date"

interface Props {
  iID: string
}

interface State {
  events: Notification[]
  connected: boolean
}

declare const Primus: any

export class Websocket extends React.Component<Props, State> {
  constructor(props: any) {
    super(props)
    this.state = { events: [], connected: false }
  }

  public componentDidMount() {
    // client side only
    console.log("Connecting to Peril's webserver")
    // const primus = new Primus(`https://staging-api.peril.systems?iID=${this.props.iID}`)
    const primus = new Primus(`${process.env.REACT_APP_PUBLIC_API_ROOT_URL}?iID=${this.props.iID}`)

    // I do not understand why this doesn't work like I'd expect

    // primus.on("connection", spark => {
    //   this.setState({ connected: true })
    //   console.log("Connected")

    //   spark.on("data", data => {
    //     this.setState({ events: [...this.state.events, data] })
    //   })

    //   spark.write({ foo: "bar" })
    // })

    primus.on("data", (data: Notification) => {
      const datedData = {
        ...data,
        date: new Date(),
      }
      this.setState({ connected: true, events: [...this.state.events, datedData] })
    })

    primus.on("disconnection", spark => {
      this.setState({ connected: false })
    })
  }

  public render() {
    return (
      <Segment style={{ padding: "8em 0em" }} vertical>
        <p>{this.state.connected ? "Connected" : "Disconnected"}</p>

        <Feed>
          {this.state.events.map(e => {
            switch (e.action) {
              case "connected":
                return connectedEvent(e)

              case "started":
                return dangerfileStartedEvent(e)

              case "finished":
                return dangerfileFinishedEvent(e)

              case "log":
                return dangerfileLogEvent(e)
            }
          })}
        </Feed>
      </Segment>
    )
  }
}

// Taken from Peril

type Notification = MSGDangerfileStarted | MSGDangerfileFinished | MSGDangerfileLog | MSGConnected

interface MSGConnected {
  action: "connected"
  connected: boolean
  date: Date
}

interface MSGDangerfileStarted {
  action: "started"
  event: string
  filenames: string[]
  date: Date
}

interface MSGDangerfileFinished {
  action: "finished"
  event: string
  filenames: string[]

  time: number
  date: Date
}

interface MSGDangerfileLog {
  action: "log"
  event: string

  filenames: string[]
  log: string
  date: Date
}

const connectedEvent = (event: MSGConnected) => (
  <Feed.Event>
    <Feed.Content>
      <Feed.Summary>
        Connected
        <Feed.Date>{relativeDate(event.date)}</Feed.Date>
      </Feed.Summary>
    </Feed.Content>
  </Feed.Event>
)

const dangerfileStartedEvent = (event: MSGDangerfileStarted) => (
  <Feed.Event>
    <Feed.Content>
      <Feed.Summary>
        <Feed.User>{event.event}</Feed.User> has started
        <Feed.Date>{relativeDate(event.date)}</Feed.Date>
      </Feed.Summary>
      <Feed.Meta>
        <Feed.Like>{event.filenames.join(", ")}</Feed.Like>
      </Feed.Meta>
    </Feed.Content>
  </Feed.Event>
)

const dangerfileFinishedEvent = (event: MSGDangerfileFinished) => (
  <Feed.Event>
    <Feed.Content>
      <Feed.Summary>
        <Feed.User>{event.event}</Feed.User> has finished
        <Feed.Date>{relativeDate(event.date)}</Feed.Date>
      </Feed.Summary>
    </Feed.Content>
  </Feed.Event>
)

const dangerfileLogEvent = (event: MSGDangerfileLog) => (
  <Feed.Event>
    <Feed.Content>
      <Feed.Summary>
        Got Logs for <Feed.User>{event.event}</Feed.User>
        <Feed.Date>{relativeDate(event.date)}</Feed.Date>
        <Feed.Extra text>
          <pre>{event.log}</pre>
        </Feed.Extra>
      </Feed.Summary>
    </Feed.Content>
  </Feed.Event>
)
