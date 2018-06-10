import * as React from "react"

import { createFragmentContainer, graphql } from "react-relay"
import { Button, Header, Icon, Segment, Table } from "semantic-ui-react"
import { Webhooks_installation } from "./__generated__/Webhooks_installation.graphql"

const Heading = (props: any) => (
  <div>
    <Header as="h2">Saved GitHub events</Header>
    <Segment clearing attached="top">
      <p style={{ width: 400, float: "left" }}>
        Peril can record webhooks sent from GitHub for a 5 minutes period, then you can re-trigger them at any point.<br />
      </p>
      <Button floated="right" icon labelPosition="right">
        Record
        <Icon name="circle" />
      </Button>
    </Segment>
  </div>
)

const WebhooksInternal = (props: Props) => {
  if (!props.installation || !props.installation.webhooks || props.installation.webhooks.edges!.length === 0) {
    return <Heading />
  }

  const webhooks = props.installation.webhooks!.edges!

  return (
    <div>
      <Heading />
      <Table attached="bottom">
        <Table.Header>
          <Table.HeaderCell>Event</Table.HeaderCell>
          <Table.HeaderCell>Header</Table.HeaderCell>
          <Table.HeaderCell>&nbsp;</Table.HeaderCell>
        </Table.Header>
        <Table.Body>
          {webhooks.map(w => (
            <Table.Row>
              <Table.Cell>{w!.node!.event}</Table.Cell>
              <Table.Cell>{w!.node!.createdAt}</Table.Cell>
              <Table.Cell>
                <Button basic content="Resend" />
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  )
}

interface Props {
  installation: Webhooks_installation
}

export default createFragmentContainer<Props>(
  WebhooksInternal,
  graphql`
    fragment Webhooks_installation on Installation {
      webhooks {
        edges {
          node {
            event
            iID
            createdAt
          }
        }
      }
    }
  `
)
