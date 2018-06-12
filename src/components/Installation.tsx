import * as React from "react"
import { graphql, QueryRenderer } from "react-relay"

import { Container } from "semantic-ui-react"
import initEnvironment from "../lib/createRelayEnvironment"
import Overview from "./installation/Overview"
import TaskRunner from "./installation/TaskRunner"
import Webhooks from "./installation/Webhooks"
import { Websocket } from "./installation/Websocket"

export default class Installation extends React.Component<any> {
  public render() {
    const installationID = this.props.match.params.installationID
    const jwt = process.env.REACT_APP_USER_JWT

    return (
      <QueryRenderer
        environment={initEnvironment({ jwt })}
        query={graphql`
          query InstallationQuery($id: Int!) {
            installation(iID: $id) {
              iID

              ...Overview_installation
              ...Webhooks_installation
              ...TaskRunner_installation
            }
          }
        `}
        variables={{ id: installationID }}
        render={({ error, props }) => {
          if (error) {
            return <div>Error!</div>
          }
          if (!props) {
            return <div>Loading...</div>
          }

          return (
            <Container style={{ paddingTop: "5em", paddingBottom: "5em" }} text>
              <Overview installation={props.installation} />
              <Webhooks installation={props.installation} />
              <TaskRunner installation={props.installation} />
              <Websocket iID={installationID} />
            </Container>
          )
        }}
      />
    )
  }
}
