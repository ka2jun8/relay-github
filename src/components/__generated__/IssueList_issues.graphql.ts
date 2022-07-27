/**
 * @generated SignedSource<<2a1d9cc235021541699b265631be2306>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment, RefetchableFragment } from 'relay-runtime';
export type IssueState = "CLOSED" | "OPEN" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type IssueList_issues$data = {
  readonly id: string;
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
  readonly " $fragmentType": "IssueList_issues";
};
export type IssueList_issues$key = {
  readonly " $data"?: IssueList_issues$data;
  readonly " $fragmentSpreads": FragmentRefs<"IssueList_issues">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "argumentDefinitions": [
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "state"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "refetch": {
      "connection": null,
      "fragmentPathInResult": [
        "node"
      ],
      "operation": require('./IssueListRefetchQuery.graphql'),
      "identifierField": "id"
    }
  },
  "name": "IssueList_issues",
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
                (v0/*: any*/),
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
    (v0/*: any*/)
  ],
  "type": "Repository",
  "abstractKey": null
};
})();

(node as any).hash = "1bfbaa7b496a39fb80af95433706154d";

export default node;
