import * as React from "react"

import { createFragmentContainer, graphql } from "react-relay"
import { Divider, Header } from "semantic-ui-react"
import { Overview_installation } from "./__generated__/Overview_installation.graphql"

const OverviewInternal = (props: Props) => (
  <div>
    <Header as="h2">{props.installation.login}</Header>
    <Divider section />
  </div>
)

interface Props {
  installation: Overview_installation
}

export default createFragmentContainer<Props>(
  OverviewInternal,
  graphql`
    fragment Overview_installation on Installation {
      login
    }
  `
)
