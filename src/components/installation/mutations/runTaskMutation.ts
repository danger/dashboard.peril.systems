import { commitMutation, graphql } from "react-relay"
import { Environment } from "relay-runtime"

export interface RunTaskMutationOptions {
  iID: number
  task: string
  data?: any
}

const mutation = graphql`
  mutation runTaskMutation($iID: Int!, $task: String!, $data: JSON!) {
    runTask(iID: $iID, task: $task, data: $data) {
      success
    }
  }
`

export const runTaskMutation = (environment: Environment, options: RunTaskMutationOptions) => {
  commitMutation(environment, {
    mutation,
    variables: options,
    onCompleted: (response, errors) => {
      console.log("Response received from server.")
      console.log(response)
    },
    onError: err => console.error(err),
  })
}
