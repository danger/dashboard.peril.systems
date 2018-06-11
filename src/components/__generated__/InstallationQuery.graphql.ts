/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type InstallationQueryVariables = {
    readonly id: number;
};
export type InstallationQueryResponse = {
    readonly installation: ({}) | null;
};



/*
query InstallationQuery(
  $id: Int!
) {
  installation(iID: $id) {
    ...Overview_installation
    ...Webhooks_installation
    ...TaskRunner_installation
    __id: id
  }
}

fragment Overview_installation on Installation {
  login
  repos
  rules
  settings
  tasks
  envVars
  __id: id
}

fragment Webhooks_installation on Installation {
  webhooks {
    edges {
      node {
        event
        iID
        createdAt
      }
    }
  }
  __id: id
}

fragment TaskRunner_installation on Installation {
  iID
  tasks
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
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "iID",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "InstallationQuery",
  "id": null,
  "text": "query InstallationQuery(\n  $id: Int!\n) {\n  installation(iID: $id) {\n    ...Overview_installation\n    ...Webhooks_installation\n    ...TaskRunner_installation\n    __id: id\n  }\n}\n\nfragment Overview_installation on Installation {\n  login\n  repos\n  rules\n  settings\n  tasks\n  envVars\n  __id: id\n}\n\nfragment Webhooks_installation on Installation {\n  webhooks {\n    edges {\n      node {\n        event\n        iID\n        createdAt\n      }\n    }\n  }\n  __id: id\n}\n\nfragment TaskRunner_installation on Installation {\n  iID\n  tasks\n  __id: id\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "InstallationQuery",
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
            "name": "Webhooks_installation",
            "args": null
          },
          {
            "kind": "FragmentSpread",
            "name": "TaskRunner_installation",
            "args": null
          },
          v2
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "InstallationQuery",
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
            "name": "login",
            "args": null,
            "storageKey": null
          },
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
          v2,
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "webhooks",
            "storageKey": null,
            "args": null,
            "concreteType": "RecordedWebhookConnection",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "edges",
                "storageKey": null,
                "args": null,
                "concreteType": "RecordedWebhookEdge",
                "plural": true,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "node",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "RecordedWebhook",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "event",
                        "args": null,
                        "storageKey": null
                      },
                      v3,
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "createdAt",
                        "args": null,
                        "storageKey": null
                      }
                    ]
                  }
                ]
              }
            ]
          },
          v3
        ]
      }
    ]
  }
};
})();
(node as any).hash = '4d3f77685e1b5f32bd70a734d23ea1e6';
export default node;
