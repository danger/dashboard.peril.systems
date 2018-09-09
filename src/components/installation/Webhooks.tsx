import * as React from "react"

import { createFragmentContainer, graphql } from "react-relay"
import { Button, Table } from "semantic-ui-react"
import { Webhooks_installation } from "./__generated__/Webhooks_installation.graphql"
import WebhooksHeader from "./WebhooksHeader"

const WebhooksInternal = (props: Props) => {
  if (!props.installation.webhooks || props.installation.webhooks.edges!.length === 0) {
    return <WebhooksHeader installation={props.installation} />
  }

  const webhooks = props.installation.webhooks!.edges!

  return (
    <div>
      <WebhooksHeader installation={props.installation} />
      <Table attached="bottom">
        <Table.Header>
          <Table.HeaderCell key="event">Event</Table.HeaderCell>
          <Table.HeaderCell key="time">Time</Table.HeaderCell>
          <Table.HeaderCell key="gap">&nbsp;</Table.HeaderCell>
        </Table.Header>
        <Table.Body>
          {webhooks.map(w => (
            <Table.Row key={w!.node!.createdAt}>
              <Table.Cell key="event">{w!.node!.event}</Table.Cell>
              <Table.Cell key="time">{w!.node!.createdAt}</Table.Cell>
              <Table.Cell key="resend">
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
      iID
      ...WebhooksHeader_installation

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
