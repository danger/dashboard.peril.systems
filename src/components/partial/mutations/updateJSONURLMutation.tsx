import { commitMutation, graphql } from "react-relay"
import { Environment } from "relay-runtime"

export interface UpdateJSONURLMutationOptions {
  iID: number
  perilSettingsJSONURL: string
}

const mutation = graphql`
  mutation updateJSONURLMutation($iID: Int!, $perilSettingsJSONURL: String!) {
    editInstallation(iID: $iID, perilSettingsJSONURL: $perilSettingsJSONURL) {
      perilSettingsJSONURL
    }
  }
`

export const updateJSONURLMutation = (environment: Environment, options: UpdateJSONURLMutationOptions) => {
  commitMutation(environment, {
    mutation,
    variables: options,
    onError: err => console.error(err),
  })
}
