import * as React from "react"

import { createFragmentContainer, graphql } from "react-relay"
import { Container, Divider, Header, Menu, Message, Segment, Table } from "semantic-ui-react"
import { Overview } from "./__generated__/Overview.graphql"

const OverviewInternal = (props: Props) => (
  <div>
    <Header as="h2">{props.installation.login}</Header>
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
