import * as React from "react"
import { Button, Dropdown, Segment } from "semantic-ui-react"

interface Props {
  iID: string
}

interface State {
  events: any[]
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
    const primus = new Primus(`https://staging-api.peril.systems?iID=${this.props.iID}`)
    // const primus = new Primus(`${process.env.REACT_APP_PUBLIC_API_ROOT_URL}?iID=${this.props.iID}`)

    primus.on("connection", spark => {
      this.setState({ connected: true })
      console.log("Connected")

      spark.on("data", data => {
        this.setState({ events: [...this.state.events, data] })
      })

      spark.write({ foo: "bar" })
    })

    primus.on("data", data => {
      console.log("word:", data)
      primus.write(data)
    })

    primus.on("disconnection", spark => {
      this.setState({ connected: false })
    })
  }

  public render() {
    return (
      <Segment style={{ padding: "8em 0em" }} vertical>
        <p>{this.state.connected ? "Connected" : "Disconnected"}</p>
        {this.state.events.map(e => (
          <p>
            <code>
              <pre>{JSON.stringify(e, null, "  ")}</pre>
            </code>
          </p>
        ))}
      </Segment>
    )
  }
}
