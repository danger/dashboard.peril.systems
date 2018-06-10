import * as React from "react"
import { createFragmentContainer, graphql, RelayProp } from "react-relay"

import { runTaskMutation } from "./mutations/runTaskMutation"
import { InstallationRules_installation } from "./__generated__/InstallationRules_installation.graphql"

interface Props {
  installation: InstallationRules_installation
}

// interface State {
//   value: string
// }

type RProps = Props & { relay: RelayProp }

class TaskRunner extends React.Component<RProps, any> {
  constructor(props: RProps) {
    super(props)
    this.state = { value: "" }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event: any) {
    this.setState({ value: event.target.value })
  }

  handleSubmit(event: any) {
    runTaskMutation(this.props.relay.environment, {
      iID: this.props.installation.iID,
      task: this.state.value,
      data: {},
    })
    event.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Task:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default createFragmentContainer<RProps>(
  TaskRunner,
  graphql`
    fragment TaskRunner_installation on Installation {
      iID
      tasks
    }
  `
)
