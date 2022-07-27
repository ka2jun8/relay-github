import { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";
import { useLazyLoadQuery } from "react-relay";
import { useRecoilState } from "recoil";
import { graphql } from "relay-runtime";
import { IssueList } from "../components/IssueList";
import { nameState } from "../recoil/name";
import { ownerState } from "../recoil/owner";
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
  const [name] = useRecoilState(nameState);
  const [owner] = useRecoilState(ownerState);
  const data = useLazyLoadQuery<issuesQuery>(GitHubQuery, {
    owner,
    name,
    state: issueState,
  });

  if (!data || !data.repository) {
    return null;
  }

  return (
    <div>
      <IssueList
        state={issueState}
        repository={data.repository}
        onChangeIssueState={setIssueState}
      />
      <br />
      <Link href="/">back</Link>
    </div>
  );
};

export default Issues;
