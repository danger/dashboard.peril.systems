/* tslint:disable */

import { ConcreteFragment } from "relay-runtime";
export type Overview_installation = {
    readonly login: string;
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
      "alias": "__id",
      "name": "id",
      "args": null,
      "storageKey": null
    }
  ]
};
(node as any).hash = '444ec2644f85c14238c494c2473eed1e';
export default node;
