import { useState } from "react";
import { useFragment, useRefetchableFragment } from "react-relay";
import { graphql } from "relay-runtime";
import { IssueState } from "./__generated__/IssueListQuery.graphql";
import { IssueList_issues$key } from "./__generated__/IssueList_issues.graphql";

const fragment = graphql`
  fragment IssueList_issues on Repository
  @argumentDefinitions(state: { type: "IssueState!" })
  @refetchable(queryName: "IssueListRefetchQuery") {
    issues(first: 10, filterBy: { states: [$state] }) {
      edges {
        node {
          id
          number
          title
          state
        }
      }
    }
  }
`;

const owner = "ka2jun8";
const repo = "relay-pokemon";

type Props = {
  repository: IssueList_issues$key;
  state: IssueState;
  onChangeIssueState: (v: IssueState) => void;
};

export const IssueList: React.FC<Props> = ({
  repository,
  state,
  onChangeIssueState,
}) => {
  const [data, refetch] = useRefetchableFragment(fragment, repository);

  if (!data) {
    return null;
  }

  return (
    <div>
      <select
        value={state}
        onChange={(e) => onChangeIssueState(e.target.value as IssueState)}
      >
        <option value="OPEN">OPEN</option>
        <option value="CLOSED">CLOSED</option>
      </select>
      <ul>
        {data.issues.edges?.map((item) => (
          <li key={item?.node?.id}>
            <a
              href={`https://github.com/${owner}/${repo}/issues/${item?.node?.number}`}
            >
              {item?.node?.title}
            </a>
          </li>
        ))}
      </ul>
      <button
        onClick={() => {
          const nextState = state === "OPEN" ? "CLOSED" : "OPEN";
          onChangeIssueState(nextState);
          refetch({ state: nextState });
        }}
      >
        switch issues
      </button>
    </div>
  );
};
