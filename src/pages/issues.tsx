import { NextPage } from "next";
import Link from "next/link";
import { IssueList } from "../components/IssueList";

const Issues: NextPage = () => {
  return (
    <div>
      <IssueList />
      <br />
      <Link href="/">back</Link>
    </div>
  );
};

export default Issues;
