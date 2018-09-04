/* tslint:disable */

import { ConcreteFragment } from "relay-runtime";
export type EnvVars_installation = {
    readonly iID: number;
    readonly envVars: any | null;
};



const node: ConcreteFragment = {
  "kind": "Fragment",
  "name": "EnvVars_installation",
  "type": "Installation",
  "metadata": null,
  "argumentDefinitions": [],
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
(node as any).hash = '94a4ffee4e437b8e6134aed9db80f6cd';
export default node;
