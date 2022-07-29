/**
 * @generated SignedSource<<01eb1292b85a30ca281826839d3efaca>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Header_viewer$data = {
  readonly name: string | null;
  readonly " $fragmentType": "Header_viewer";
};
export type Header_viewer$key = {
  readonly " $data"?: Header_viewer$data;
  readonly " $fragmentSpreads": FragmentRefs<"Header_viewer">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Header_viewer",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    }
  ],
  "type": "User",
  "abstractKey": null
};

(node as any).hash = "ee4e453a29764a461fab9bcb3bed7728";

export default node;
