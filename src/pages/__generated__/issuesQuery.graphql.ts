/**
 * @generated SignedSource<<fbc34dadb8694ccaa33c6b8f78d2d830>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type IssueState = "CLOSED" | "OPEN" | "%future added value";
export type issuesQuery$variables = {
  name: string;
  owner: string;
  state: IssueState;
};
export type issuesQuery$data = {
  readonly repository: {
    readonly " $fragmentSpreads": FragmentRefs<"IssueList_issues">;
  } | null;
};
export type issuesQuery = {
  response: issuesQuery$data;
  variables: issuesQuery$variables;
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
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "state"
},
v3 = [
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
v4 = {
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
      (v1/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "issuesQuery",
    "selections": [
      {
        "alias": null,
        "args": (v3/*: any*/),
        "concreteType": "Repository",
        "kind": "LinkedField",
        "name": "repository",
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
      (v0/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Operation",
    "name": "issuesQuery",
    "selections": [
      {
        "alias": null,
        "args": (v3/*: any*/),
        "concreteType": "Repository",
        "kind": "LinkedField",
        "name": "repository",
        "plural": false,
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
                      (v4/*: any*/),
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
          },
          (v4/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "3f8cbad209f5fe82e76a570d15041f4b",
    "id": null,
    "metadata": {},
    "name": "issuesQuery",
    "operationKind": "query",
    "text": "query issuesQuery(\n  $owner: String!\n  $name: String!\n  $state: IssueState!\n) {\n  repository(owner: $owner, name: $name) {\n    ...IssueList_issues_2HEoAY\n    id\n  }\n}\n\nfragment IssueList_issues_2HEoAY on Repository {\n  issues(first: 10, filterBy: {states: [$state]}) {\n    edges {\n      node {\n        id\n        number\n        title\n        state\n      }\n    }\n  }\n  id\n}\n"
  }
};
})();

(node as any).hash = "cfe074d2ec1040ce23ff01a2d66d3e3d";

export default node;
