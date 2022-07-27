import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useLazyLoadQuery } from "react-relay";
import { useRecoilState } from "recoil";
import { graphql } from "relay-runtime";
import styles from "../../styles/Home.module.css";
import { IssueButton } from "../components/IssueButton";
import { nameState } from "../recoil/name";
import { ownerState } from "../recoil/owner";
import { pagesIndexQuery } from "./__generated__/pagesIndexQuery.graphql";

const GitHubQuery = graphql`
  query pagesIndexQuery($owner: String!, $name: String!) {
    repository(owner: $owner, name: $name) {
      __typename
      id
      name
    }
  }
`;

const Home: NextPage = () => {
  const [recoilStateName, setRecoilStateName] = useRecoilState(nameState);
  const [recoilStateOwner, setRecoilStateOwner] = useRecoilState(ownerState);
  const [name, setName] = useState(recoilStateName);
  const [owner, setOwner] = useState(recoilStateOwner);
  const data = useLazyLoadQuery<pagesIndexQuery>(GitHubQuery, {
    owner: recoilStateOwner,
    name: recoilStateName,
  });

  if (!data || !data.repository) {
    return null;
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>GraphQL Relay Sample</h1>

        <h3>
          <Link href="/issues">/issues</Link>
        </h3>
        <div>
          <label>owner</label>
          <input value={owner} onChange={(e) => setOwner(e.target.value)} />
          <br />
          <label>name</label>
          <input value={name} onChange={(e) => setName(e.target.value)} />
          <br />
          <button
            onClick={() => {
              setRecoilStateOwner(owner);
              setRecoilStateName(name);
            }}
          >
            switch name
          </button>
        </div>
        <br />
        <IssueButton repositoryId={data.repository.id} />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
