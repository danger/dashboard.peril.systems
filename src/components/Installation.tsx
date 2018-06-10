import * as React from "react"
import { graphql, QueryRenderer } from "react-relay"

import initEnvironment from "../lib/createRelayEnvironment"

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
              repos
              rules
              settings
              tasks
              envVars
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
            <div>
              <pre style={{ width: 300 }}>
                <code>{JSON.stringify(props)}</code>
              </pre>
            </div>
          )
        }}
      />
    )
  }
}
