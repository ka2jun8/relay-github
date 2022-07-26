import { useState } from "react";
import { useLazyLoadQuery } from "react-relay";
import { graphql } from "relay-runtime";
import {
  IssueListQuery,
  IssueState,
} from "./__generated__/IssueListQuery.graphql";

const issueListQuery = graphql`
  query IssueListQuery($state: IssueState!) {
    repository(owner: "ka2jun8", name: "relay-pokemon") {
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
  }
`;

const owner = "ka2jun8";
const repo = "relay-pokemon";

export const IssueList: React.FC = () => {
  const [issueState, setIssueState] = useState<IssueState>("OPEN");

  const data = useLazyLoadQuery<IssueListQuery>(issueListQuery, {
    state: issueState,
  });

  return (
    <div>
      <select onChange={(e) => setIssueState(e.target.value as IssueState)}>
        <option value="OPEN">OPEN</option>
        <option value="CLOSED">CLOSED</option>
      </select>
      <ul>
        {data.repository?.issues.edges?.map((item) => (
          <li key={item?.node?.id}>
            <a
              href={`https://github.com/${owner}/${repo}/issues/${item?.node?.number}`}
            >
              {item?.node?.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
