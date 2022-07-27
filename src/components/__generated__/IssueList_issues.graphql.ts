/**
 * @generated SignedSource<<dd6181864c2cb8012e2e8df00d94bc4d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type IssueState = "CLOSED" | "OPEN" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type IssueList_issues$data = {
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

const node: ReaderFragment = {
  "argumentDefinitions": [
    {
      "defaultValue": "OPEN",
      "kind": "LocalArgument",
      "name": "state"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
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
};

(node as any).hash = "8dd9c9dfa61ba34d5e7cd356b296fed6";

export default node;
