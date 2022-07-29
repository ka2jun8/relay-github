/**
 * @generated SignedSource<<8ca993559ee47fd20efa18f086dae8be>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type pagesIndexQuery$variables = {
  name: string;
  owner: string;
};
export type pagesIndexQuery$data = {
  readonly repository: {
    readonly __typename: "Repository";
    readonly id: string;
    readonly name: string;
  } | null;
  readonly viewer: {
    readonly " $fragmentSpreads": FragmentRefs<"Header_viewer">;
  };
};
export type pagesIndexQuery = {
  response: pagesIndexQuery$data;
  variables: pagesIndexQuery$variables;
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
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v4 = {
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
    (v2/*: any*/),
    (v3/*: any*/)
  ],
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "pagesIndexQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "Header_viewer"
          }
        ],
        "storageKey": null
      },
      (v4/*: any*/)
    ],
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
    "name": "pagesIndexQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          (v2/*: any*/)
        ],
        "storageKey": null
      },
      (v4/*: any*/)
    ]
  },
  "params": {
    "cacheID": "2be7cd1b5964141e8180792bed53b733",
    "id": null,
    "metadata": {},
    "name": "pagesIndexQuery",
    "operationKind": "query",
    "text": "query pagesIndexQuery(\n  $owner: String!\n  $name: String!\n) {\n  viewer {\n    ...Header_viewer\n    id\n  }\n  repository(owner: $owner, name: $name) {\n    __typename\n    id\n    name\n  }\n}\n\nfragment Header_viewer on User {\n  name\n}\n"
  }
};
})();

(node as any).hash = "18c5150ba4136e76b661ebf819eae922";

export default node;
