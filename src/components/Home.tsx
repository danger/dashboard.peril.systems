import { graphql, QueryRenderer } from "react-relay"
import initEnvironment from "../lib/createRelayEnvironment"

import * as React from "react"
import { Container, Header, Image } from "semantic-ui-react"
import { HomeQueryResponse } from "./__generated__/HomeQuery.graphql"

export default () => (
  <QueryRenderer
    environment={initEnvironment()}
    query={graphql`
      query HomeQuery {
        me {
          name

          installations {
            edges {
              node {
                login
                iID
                avatarURL
              }
            }
          }

          installationsToSetUp {
            edges {
              node {
                iID
                login
              }
            }
          }
        }
      }
    `}
    variables={{}}
    render={({ error, props }) => {
      if (error) {
        // tslint:disable-next-line:no-console
        console.error(error)
        return <div>Error!</div>
      }

      if (!props) {
        return null
      }

      const p = props as HomeQueryResponse
      const installations = p.me && p.me.installations && p.me.installations.edges

      return (
        <div style={{ marginTop: 100 }}>
          <Container text>
            <Header as="h1" dividing>
              Your installations
            </Header>

            <div style={{ marginTop: 40 }}>
              {installations!.map(i => (
                <div>
                  <a href={`/installation/${i!.node!.iID}`}>
                    <Header as="h2">
                      <Image circular src={i!.node!.avatarURL} /> {i!.node!.login}
                    </Header>
                  </a>

                  <br />
                </div>
              ))}
            </div>
          </Container>
        </div>
      )
    }}
  />
)
