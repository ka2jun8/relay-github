import { GraphQLResponse } from "relay-runtime";

const ENDPOINT = "https://api.github.com/graphql";

async function fetchGraphQL(
  text?: string | null,
  variables?: Record<string, string | number>
): Promise<GraphQLResponse> {
  const GITHUB_AUTH_TOKEN = process.env.NEXT_PUBLIC_GITHUB_AUTH_TOKEN;

  if (!text) {
    throw new Error("graphql query is empty.");
  }

  const response = await fetch(ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `bearer ${GITHUB_AUTH_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: text,
      variables,
    }),
  });
  const data = await response.json();

  if (response.status >= 400) {
    return { errors: [data] };
  }

  return data;
}

export default fetchGraphQL;
