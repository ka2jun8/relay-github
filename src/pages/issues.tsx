import { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";
import { useLazyLoadQuery } from "react-relay";
import { graphql } from "relay-runtime";
import { IssueList } from "../components/IssueList";
import { issuesQuery, IssueState } from "./__generated__/issuesQuery.graphql";

const GitHubQuery = graphql`
  query issuesQuery($owner: String!, $name: String!, $state: IssueState!) {
    repository(owner: $owner, name: $name) {
      ...IssueList_issues @arguments(state: $state)
    }
  }
`;

const Issues: NextPage = () => {
  const [issueState, setIssueState] = useState<IssueState>("OPEN");
  const data = useLazyLoadQuery<issuesQuery>(GitHubQuery, {
    owner: "ka2jun8",
    name: "relay-github",
    state: issueState,
  });

  if (!data || !data.repository) {
    return null;
  }

  return (
    <div>
      <IssueList
        repository={data.repository}
        onChangeIssueState={setIssueState}
      />
      <br />
      <Link href="/">back</Link>
    </div>
  );
};

export default Issues;
