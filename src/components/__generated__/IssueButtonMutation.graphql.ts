/**
 * @generated SignedSource<<98dd63df6e951d2b33a68b6575dad7c5>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type IssueButtonMutation$variables = {
  repositoryId: string;
};
export type IssueButtonMutation$data = {
  readonly createIssue: {
    readonly issue: {
      readonly id: string;
    } | null;
  } | null;
};
export type IssueButtonMutation = {
  response: IssueButtonMutation$data;
  variables: IssueButtonMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "repositoryId"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "fields": [
          {
            "kind": "Literal",
            "name": "body",
            "value": "Body Sample"
          },
          {
            "kind": "Variable",
            "name": "repositoryId",
            "variableName": "repositoryId"
          },
          {
            "kind": "Literal",
            "name": "title",
            "value": "Sample Title"
          }
        ],
        "kind": "ObjectValue",
        "name": "input"
      }
    ],
    "concreteType": "CreateIssuePayload",
    "kind": "LinkedField",
    "name": "createIssue",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Issue",
        "kind": "LinkedField",
        "name": "issue",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "IssueButtonMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "IssueButtonMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "2873efed8b277a19183b1a1e44e72011",
    "id": null,
    "metadata": {},
    "name": "IssueButtonMutation",
    "operationKind": "mutation",
    "text": "mutation IssueButtonMutation(\n  $repositoryId: ID!\n) {\n  createIssue(input: {repositoryId: $repositoryId, title: \"Sample Title\", body: \"Body Sample\"}) {\n    issue {\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "607a0cf344edfe560a4e45ca137751ab";

export default node;
