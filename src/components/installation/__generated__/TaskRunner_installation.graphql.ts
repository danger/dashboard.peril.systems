/* tslint:disable */

import { ConcreteFragment } from "relay-runtime";
export type TaskRunner_installation = {
    readonly iID: number;
    readonly tasks: any;
};



const node: ConcreteFragment = {
  "kind": "Fragment",
  "name": "TaskRunner_installation",
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
      "name": "tasks",
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
(node as any).hash = '7aac742944a40d27ff1307ae5b9b5029';
export default node;
