import {
  Environment,
  FetchFunction,
  Network,
  RecordSource,
  Store,
} from "relay-runtime";
import fetchGraphQL from "../graphql/fetchGraphql";

const fetchRelay: FetchFunction = async (params, variables) => {
  console.log(
    `fetching query ${params.name} with ${JSON.stringify(variables)}`
  );
  return fetchGraphQL(params.text, variables);
};

export default new Environment({
  network: Network.create(fetchRelay),
  store: new Store(new RecordSource(), {
    queryCacheExpirationTime: 5 * 60 * 1000,
  }),
});
