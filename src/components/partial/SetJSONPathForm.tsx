import * as React from "react"

import { createFragmentContainer, graphql, RelayProp } from "react-relay"
import { Form } from "semantic-ui-react"
import { SetJSONPathForm_installation } from "./__generated__/SetJSONPathForm_installation.graphql"
import { updateJSONURLMutation } from "./mutations/updateJSONURLMutation"

interface Props {
  installation: SetJSONPathForm_installation
}

type RProps = Props & { relay: RelayProp }

interface State {
  loading: boolean
  url: string
}

export class SetJSONPathForm extends React.Component<RProps, State> {
  public state = { loading: false, url: "" }

  public handleChange = (_: any, { value }: any) => this.setState({ url: value })

  public handleSubmit = async () => {
    this.setState({ loading: true })

    await updateJSONURLMutation(this.props.relay.environment, {
      iID: this.props.installation.iID,
      perilSettingsJSONURL: this.state.url,
    })

    window.location.replace(`/installation/${this.props.installation.iID}`)
  }

  public render() {
    return (
      <Form onSubmit={this.handleSubmit} loading={this.state.loading}>
        <Form.Group widths="equal">
          <Form.Input label="Set the JSON URL: " onChange={this.handleChange} />
          <Form.Button>Submit</Form.Button>
        </Form.Group>
      </Form>
    )
  }
}

export default createFragmentContainer<RProps>(
  SetJSONPathForm,
  graphql`
    fragment SetJSONPathForm_installation on Installation {
      iID
    }
  `
)
