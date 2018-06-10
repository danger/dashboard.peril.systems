/* tslint:disable */

import { ConcreteFragment } from "relay-runtime";
export type Overview_installation = {
    readonly login: string;
    readonly repos: any;
    readonly rules: any;
    readonly settings: any;
    readonly tasks: any;
    readonly envVars: any | null;
};



const node: ConcreteFragment = {
  "kind": "Fragment",
  "name": "Overview_installation",
  "type": "Installation",
  "metadata": null,
  "argumentDefinitions": [],
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
    {
      "kind": "ScalarField",
      "alias": "__id",
      "name": "id",
      "args": null,
      "storageKey": null
    }
  ]
};
(node as any).hash = '910920e167b46d5acab284be7722ae9f';
export default node;
