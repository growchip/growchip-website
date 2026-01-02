import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const endpoint = process.env.HYGRAPH_ENDPOINT;
const token = process.env.HYGRAPH_TOKEN;

if (!endpoint) {
  throw new Error("HYGRAPH_ENDPOINT is missing");
}

export const serverApolloClient = new ApolloClient({
  ssrMode: true,
  link: new HttpLink({
    uri: endpoint,
    headers: token
      ? { Authorization: `Bearer ${token}` }
      : {},
  }),
  cache: new InMemoryCache(),
});