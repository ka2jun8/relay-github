/**
 * @generated SignedSource<<d813a77cf44a5cbd12473b170230f156>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type IssueState = "CLOSED" | "OPEN" | "%future added value";
export type IssueListQuery$variables = {
  state: IssueState;
};
export type IssueListQuery$data = {
  readonly repository: {
    readonly issues: {
      readonly edges: ReadonlyArray<{
        readonly node: {
          readonly id: string;
          readonly number: number;
          readonly state: IssueState;
          readonly title: string;
        } | null;
      } | null> | null;
    };
  } | null;
};
export type IssueListQuery = {
  response: IssueListQuery$data;
  variables: IssueListQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "state"
  }
],
v1 = [
  {
    "kind": "Literal",
    "name": "name",
    "value": "relay-pokemon"
  },
  {
    "kind": "Literal",
    "name": "owner",
    "value": "ka2jun8"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": [
    {
      "fields": [
        {
          "items": [
            {
              "kind": "Variable",
              "name": "states.0",
              "variableName": "state"
            }
          ],
          "kind": "ListValue",
          "name": "states"
        }
      ],
      "kind": "ObjectValue",
      "name": "filterBy"
    },
    {
      "kind": "Literal",
      "name": "first",
      "value": 10
    }
  ],
  "concreteType": "IssueConnection",
  "kind": "LinkedField",
  "name": "issues",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "IssueEdge",
      "kind": "LinkedField",
      "name": "edges",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "Issue",
          "kind": "LinkedField",
          "name": "node",
          "plural": false,
          "selections": [
            (v2/*: any*/),
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "number",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "title",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "state",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "IssueListQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Repository",
        "kind": "LinkedField",
        "name": "repository",
        "plural": false,
        "selections": [
          (v3/*: any*/)
        ],
        "storageKey": "repository(name:\"relay-pokemon\",owner:\"ka2jun8\")"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "IssueListQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Repository",
        "kind": "LinkedField",
        "name": "repository",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          (v2/*: any*/)
        ],
        "storageKey": "repository(name:\"relay-pokemon\",owner:\"ka2jun8\")"
      }
    ]
  },
  "params": {
    "cacheID": "464996d1e00e435a5b3393c48ceee73b",
    "id": null,
    "metadata": {},
    "name": "IssueListQuery",
    "operationKind": "query",
    "text": "query IssueListQuery(\n  $state: IssueState!\n) {\n  repository(owner: \"ka2jun8\", name: \"relay-pokemon\") {\n    issues(first: 10, filterBy: {states: [$state]}) {\n      edges {\n        node {\n          id\n          number\n          title\n          state\n        }\n      }\n    }\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "ca29e2f079285325e427baf146e8c6b4";

export default node;
