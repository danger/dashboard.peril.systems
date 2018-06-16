/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type updateJSONURLMutationVariables = {
    readonly iID: number;
    readonly perilSettingsJSONURL: string;
};
export type updateJSONURLMutationResponse = {
    readonly editInstallation: ({
        readonly perilSettingsJSONURL: string;
    }) | null;
};



/*
mutation updateJSONURLMutation(
  $iID: Int!
  $perilSettingsJSONURL: String!
) {
  editInstallation(iID: $iID, perilSettingsJSONURL: $perilSettingsJSONURL) {
    perilSettingsJSONURL
    __id: id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "iID",
    "type": "Int!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "perilSettingsJSONURL",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "editInstallation",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "iID",
        "variableName": "iID",
        "type": "Int!"
      },
      {
        "kind": "Variable",
        "name": "perilSettingsJSONURL",
        "variableName": "perilSettingsJSONURL",
        "type": "String!"
      }
    ],
    "concreteType": "Installation",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "perilSettingsJSONURL",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": "__id",
        "name": "id",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "updateJSONURLMutation",
  "id": null,
  "text": "mutation updateJSONURLMutation(\n  $iID: Int!\n  $perilSettingsJSONURL: String!\n) {\n  editInstallation(iID: $iID, perilSettingsJSONURL: $perilSettingsJSONURL) {\n    perilSettingsJSONURL\n    __id: id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "updateJSONURLMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "updateJSONURLMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
(node as any).hash = '836f9441427957035863e7d64b0a374c';
export default node;
