/**
 * @generated SignedSource<<97039a1d118fd0dc9c0e56ec923b44e0>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type IssueState = "CLOSED" | "OPEN" | "%future added value";
export type IssueListRefetchQuery$variables = {
  id: string;
  state: IssueState;
};
export type IssueListRefetchQuery$data = {
  readonly node: {
    readonly " $fragmentSpreads": FragmentRefs<"IssueList_issues">;
  } | null;
};
export type IssueListRefetchQuery = {
  response: IssueListRefetchQuery$data;
  variables: IssueListRefetchQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "id"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "state"
},
v2 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
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
    "name": "IssueListRefetchQuery",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          {
            "args": [
              {
                "kind": "Variable",
                "name": "state",
                "variableName": "state"
              }
            ],
            "kind": "FragmentSpread",
            "name": "IssueList_issues"
          }
        ],
        "storageKey": null
      }
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
    "name": "IssueListRefetchQuery",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "__typename",
            "storageKey": null
          },
          (v3/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              {
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
                          (v3/*: any*/),
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
              }
            ],
            "type": "Repository",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "702267ab1959e1328fb3bfdb373bd480",
    "id": null,
    "metadata": {},
    "name": "IssueListRefetchQuery",
    "operationKind": "query",
    "text": "query IssueListRefetchQuery(\n  $state: IssueState!\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ...IssueList_issues_2HEoAY\n    id\n  }\n}\n\nfragment IssueList_issues_2HEoAY on Repository {\n  issues(first: 10, filterBy: {states: [$state]}) {\n    edges {\n      node {\n        id\n        number\n        title\n        state\n      }\n    }\n  }\n  id\n}\n"
  }
};
})();

(node as any).hash = "1bfbaa7b496a39fb80af95433706154d";

export default node;
