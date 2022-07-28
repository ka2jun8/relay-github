/**
 * @generated SignedSource<<e4088b20189c17c39eb1693644707db0>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type IssueListTestQuery$variables = {};
export type IssueListTestQuery$data = {
  readonly repository: {
    readonly id: string;
    readonly name: string;
    readonly " $fragmentSpreads": FragmentRefs<"IssueList_issues">;
  } | null;
};
export type IssueListTestQuery = {
  response: IssueListTestQuery$data;
  variables: IssueListTestQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "name",
    "value": "sample"
  },
  {
    "kind": "Literal",
    "name": "owner",
    "value": "sample"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v3 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "ID"
},
v4 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "String"
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "IssueListTestQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "Repository",
        "kind": "LinkedField",
        "name": "repository",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          (v2/*: any*/),
          {
            "args": [
              {
                "kind": "Literal",
                "name": "state",
                "value": "OPEN"
              }
            ],
            "kind": "FragmentSpread",
            "name": "IssueList_issues"
          }
        ],
        "storageKey": "repository(name:\"sample\",owner:\"sample\")"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "IssueListTestQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "Repository",
        "kind": "LinkedField",
        "name": "repository",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          (v2/*: any*/),
          {
            "alias": null,
            "args": [
              {
                "fields": [
                  {
                    "items": [
                      {
                        "kind": "Literal",
                        "name": "states.0",
                        "value": "OPEN"
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
                      (v1/*: any*/),
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
            "storageKey": "issues(filterBy:{\"states\":[\"OPEN\"]},first:10)"
          }
        ],
        "storageKey": "repository(name:\"sample\",owner:\"sample\")"
      }
    ]
  },
  "params": {
    "cacheID": "816eaa2893901055c20f32d0ea81d05c",
    "id": null,
    "metadata": {
      "relayTestingSelectionTypeInfo": {
        "repository": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Repository"
        },
        "repository.id": (v3/*: any*/),
        "repository.issues": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "IssueConnection"
        },
        "repository.issues.edges": {
          "enumValues": null,
          "nullable": true,
          "plural": true,
          "type": "IssueEdge"
        },
        "repository.issues.edges.node": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Issue"
        },
        "repository.issues.edges.node.id": (v3/*: any*/),
        "repository.issues.edges.node.number": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "Int"
        },
        "repository.issues.edges.node.state": {
          "enumValues": [
            "CLOSED",
            "OPEN"
          ],
          "nullable": false,
          "plural": false,
          "type": "IssueState"
        },
        "repository.issues.edges.node.title": (v4/*: any*/),
        "repository.name": (v4/*: any*/)
      }
    },
    "name": "IssueListTestQuery",
    "operationKind": "query",
    "text": "query IssueListTestQuery {\n  repository(owner: \"sample\", name: \"sample\") {\n    id\n    name\n    ...IssueList_issues_3zpllW\n  }\n}\n\nfragment IssueList_issues_3zpllW on Repository {\n  issues(first: 10, filterBy: {states: [OPEN]}) {\n    edges {\n      node {\n        id\n        number\n        title\n        state\n      }\n    }\n  }\n  id\n}\n"
  }
};
})();

(node as any).hash = "aeea2c8b99ecf1f8675089283e6a4c88";

export default node;
