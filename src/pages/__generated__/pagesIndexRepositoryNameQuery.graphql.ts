/**
 * @generated SignedSource<<4d0933911a2cb7faf8a5d8f2639c8686>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type pagesIndexRepositoryNameQuery$variables = {
  name: string;
  owner: string;
};
export type pagesIndexRepositoryNameQuery$data = {
  readonly repository: {
    readonly __typename: "Repository";
    readonly id: string;
    readonly name: string;
  } | null;
};
export type pagesIndexRepositoryNameQuery = {
  response: pagesIndexRepositoryNameQuery$data;
  variables: pagesIndexRepositoryNameQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "name"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "owner"
},
v2 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "name",
        "variableName": "name"
      },
      {
        "kind": "Variable",
        "name": "owner",
        "variableName": "owner"
      }
    ],
    "concreteType": "Repository",
    "kind": "LinkedField",
    "name": "repository",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "__typename",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "name",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "pagesIndexRepositoryNameQuery",
    "selections": (v2/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "pagesIndexRepositoryNameQuery",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "67cb7d6cd77048c928f1461f2289c71e",
    "id": null,
    "metadata": {},
    "name": "pagesIndexRepositoryNameQuery",
    "operationKind": "query",
    "text": "query pagesIndexRepositoryNameQuery(\n  $owner: String!\n  $name: String!\n) {\n  repository(owner: $owner, name: $name) {\n    __typename\n    id\n    name\n  }\n}\n"
  }
};
})();

(node as any).hash = "e1f70e714d35c7ce7cff457a06896397";

export default node;
