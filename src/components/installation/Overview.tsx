import * as React from "react"

import { createFragmentContainer, graphql } from "react-relay"
import { Container, Divider, Header, Menu, Message, Segment, Table } from "semantic-ui-react"
import { Overview } from "./__generated__/Overview.graphql"

const OverviewInternal = (props: Props) => (
  <div>
    <Header as="h2">{props.installation.login}</Header>

    <Header as="h4" attached="top" block>
      Top Block Header
    </Header>
    <Segment attached>Segment</Segment>

    <Divider section />

    <Segment attached>Segment</Segment>
    <Header as="h4" attached="bottom" block>
      Bottom Block Header
    </Header>

    <Divider section />

    <Header as="h4" attached="top" block>
      Top Block Header
    </Header>
    <Segment attached>Segment</Segment>
    <Header as="h4" attached block>
      Middle Block Header
    </Header>
    <Segment attached>Segment</Segment>
    <Header as="h4" attached="bottom" block>
      Bottom Block Header
    </Header>

    <Header as="h2">Mixed Attached Content</Header>

    <Segment attached="top">Segment</Segment>
    <Menu attached compact widths={3}>
      <Menu.Item as="a">Item</Menu.Item>
      <Menu.Item as="a">Item</Menu.Item>
      <Menu.Item as="a">Item</Menu.Item>
    </Menu>
    <Segment attached>1</Segment>
    <Message attached content="Message" icon="help circle" info />
    <Table attached="bottom">
      <Table.Header>
        <Table.HeaderCell>Header</Table.HeaderCell>
        <Table.HeaderCell>Header</Table.HeaderCell>
        <Table.HeaderCell>Header</Table.HeaderCell>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell>Cell</Table.Cell>
          <Table.Cell>Cell</Table.Cell>
          <Table.Cell>Cell</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Cell</Table.Cell>
          <Table.Cell>Cell</Table.Cell>
          <Table.Cell>Cell</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Cell</Table.Cell>
          <Table.Cell>Cell</Table.Cell>
          <Table.Cell>Cell</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>

    <Divider section />
  </div>
)

interface Props {
  installation: Overview
}

export default createFragmentContainer<Props>(
  OverviewInternal,
  graphql`
    fragment Overview_installation on Installation {
      login

      repos
      rules
      settings
      tasks
      envVars
    }
  `
)
