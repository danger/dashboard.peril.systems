/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type InstallationQueryVariables = {
    readonly id: number;
};
export type InstallationQueryResponse = {
    readonly installation: ({
        readonly repos: any;
        readonly rules: any;
        readonly settings: any;
        readonly tasks: any;
        readonly envVars: any | null;
    }) | null;
};



/*
query InstallationQuery(
  $id: Int!
) {
  installation(iID: $id) {
    repos
    rules
    settings
    tasks
    envVars
    __id: id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "id",
    "type": "Int!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "installation",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "iID",
        "variableName": "id",
        "type": "Int!"
      }
    ],
    "concreteType": "Installation",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "repos",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "rules",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "settings",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "tasks",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "envVars",
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
  "operationKind": "query",
  "name": "InstallationQuery",
  "id": null,
  "text": "query InstallationQuery(\n  $id: Int!\n) {\n  installation(iID: $id) {\n    repos\n    rules\n    settings\n    tasks\n    envVars\n    __id: id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "InstallationQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "InstallationQuery",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
(node as any).hash = '95aac262c0444827e66c1b34a604844a';
export default node;
