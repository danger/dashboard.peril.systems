import * as React from "react"
import { graphql, QueryRenderer } from "react-relay"

import { Container } from "semantic-ui-react"
import initEnvironment from "../lib/createRelayEnvironment"
import Overview from "./installation/Overview"
import Settings from "./installation/Settings"

export default class InstallationSettings extends React.Component<any> {
  public render() {
    const installationID = this.props.match.params.installationID

    return (
      <QueryRenderer
        environment={initEnvironment()}
        query={graphql`
          query InstallationSettingsQuery($id: Int!) {
            installation(iID: $id) {
              ...Overview_installation
              ...Settings_installation
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
              <Settings installation={props.installation} />
            </Container>
          )
        }}
      />
    )
  }
}
