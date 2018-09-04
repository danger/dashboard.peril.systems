/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type InstallationSettingsQueryVariables = {
    readonly id: number;
};
export type InstallationSettingsQueryResponse = {
    readonly installation: ({}) | null;
};



/*
query InstallationSettingsQuery(
  $id: Int!
) {
  installation(iID: $id) {
    ...Overview_installation
    ...Settings_installation
    __id: id
  }
}

fragment Overview_installation on Installation {
  iID
  login
  __id: id
}

fragment Settings_installation on Installation {
  iID
  installationSlackUpdateWebhookURL
  perilSettingsJSONURL
  __id: id
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
    "kind": "Variable",
    "name": "iID",
    "variableName": "id",
    "type": "Int!"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": "__id",
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "InstallationSettingsQuery",
  "id": null,
  "text": "query InstallationSettingsQuery(\n  $id: Int!\n) {\n  installation(iID: $id) {\n    ...Overview_installation\n    ...Settings_installation\n    __id: id\n  }\n}\n\nfragment Overview_installation on Installation {\n  iID\n  login\n  __id: id\n}\n\nfragment Settings_installation on Installation {\n  iID\n  installationSlackUpdateWebhookURL\n  perilSettingsJSONURL\n  __id: id\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "InstallationSettingsQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "installation",
        "storageKey": null,
        "args": v1,
        "concreteType": "Installation",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "Overview_installation",
            "args": null
          },
          {
            "kind": "FragmentSpread",
            "name": "Settings_installation",
            "args": null
          },
          v2
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "InstallationSettingsQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "installation",
        "storageKey": null,
        "args": v1,
        "concreteType": "Installation",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "iID",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "login",
            "args": null,
            "storageKey": null
          },
          v2,
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "installationSlackUpdateWebhookURL",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "perilSettingsJSONURL",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
};
})();
(node as any).hash = 'dd974284ac91e4200ffaa94e35715785';
export default node;
