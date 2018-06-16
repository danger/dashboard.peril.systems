import { graphql, QueryRenderer } from "react-relay"

import Cookies from "universal-cookie"

import * as React from "react"
import { Link } from "react-router-dom"
import { Container, Dropdown, Menu } from "semantic-ui-react"
import initEnvironment from "../../lib/createRelayEnvironment"
import { LayoutQueryResponse } from "./__generated__/LayoutQuery.graphql"

const MenuItem = (props: { text: string; href: string }) => (
  <Dropdown.Item as={Link} to={props.href}>
    {props.text}
  </Dropdown.Item>
)

const logOut = () => {
  const cookies = new Cookies()
  cookies.remove("jwt")
  window.location.replace("/")
}

const renderLoggedInMenu: React.SFC<LayoutQueryResponse> = props => (
  <Menu.Menu position="right">
    <Dropdown text={(props.me && props.me.name) || "-"} pointing className="link item">
      <Dropdown.Menu>
        <Dropdown.Header>Installations</Dropdown.Header>
        {props.me &&
          props.me.installations &&
          props.me.installations.edges!.map(i => (
            <MenuItem key={i!.node!.login} text={i!.node!.login} href={`/installation/${i!.node!.iID}`} />
          ))}
        <Dropdown.Divider />

        <Dropdown.Header>Installations To Set Up</Dropdown.Header>
        {props.me &&
          props.me.installationsToSetUp &&
          props.me.installationsToSetUp.edges!.map(i => (
            <MenuItem key={i!.node!.login} text={i!.node!.login} href={`/partial/${i!.node!.iID}`} />
          ))}

        <Dropdown.Divider />
        <Dropdown.Item onClick={logOut}>Log Out</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  </Menu.Menu>
)

const InnerLayout: React.SFC<LayoutQueryResponse> = props => (
  <div>
    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.1/semantic.min.css" />

    <Menu fixed="top">
      <Container text>
        <Menu.Item header>Peril Admin</Menu.Item>
        {props.me && renderLoggedInMenu(props)}
      </Container>
    </Menu>

    {props.children}
  </div>
)

const jwt = process.env.REACT_APP_USER_JWT
export default initialProps => (
  <QueryRenderer
    environment={initEnvironment()}
    query={graphql`
      query LayoutQuery {
        me {
          name

          installations {
            edges {
              node {
                login
                iID
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
        console.error(error)
        return <div>Error!</div>
      }

      if (!props) {
        // We're waiting on the reponse for installations
        return <InnerLayout me={{} as any} />
      }

      return <InnerLayout me={props.me}>{initialProps.children}</InnerLayout>
    }}
  />
)
