import * as React from "react"
import { graphql, QueryRenderer } from "react-relay"

import { Container, Form } from "semantic-ui-react"
import initEnvironment from "../lib/createRelayEnvironment"
import SetJSONPathForm from "./partial/SetJSONPathForm"

export default class PartialInstallation extends React.Component<any> {
  public render() {
    const installationID = this.props.match.params.installationID

    return (
      <QueryRenderer
        environment={initEnvironment()}
        query={graphql`
          query PartialInstallationQuery($id: Int!) {
            installation(iID: $id) {
              login
              ...SetJSONPathForm_installation
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
              <h1>{props.installation.login}</h1>
              <SetJSONPathForm installation={props.installation as any} />
            </Container>
          )
        }}
      />
    )
  }
}
