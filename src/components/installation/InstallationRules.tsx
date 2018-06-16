import * as React from "react"
import { createFragmentContainer, graphql, RelayProp } from "react-relay"
import { Segment } from "semantic-ui-react"
import { InstallationRules_installation } from "./__generated__/InstallationRules_installation.graphql"

interface Props {
  installation: InstallationRules_installation
}

export const InstallationRules: any = (props: Props & { relay: RelayProp }) => {
  if (!props.installation) {
    return <div />
  }

  const visibleSettings = {
    rules: props.installation.rules,
    repos: props.installation.repos,
    tasks: props.installation.tasks,
    scheduler: props.installation.scheduler,
  }
  return (
    <Segment>
      <div className="ui top left attached label">Peril settings</div>
      <pre>{JSON.stringify(visibleSettings, null, "  ")}</pre>
    </Segment>
  )
}

export default createFragmentContainer<Props>(
  InstallationRules,
  graphql`
    fragment InstallationRules_installation on Installation {
      iID
      repos
      rules
      tasks
      scheduler
      perilSettingsJSONURL
    }
  `
)
