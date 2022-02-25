import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const GraphQL = (results: any) => {
  return <div>graphQl</div>;
};

export async function getStaticProps() {
  const client = new ApolloClient({
    uri: "https://countries.trevorblades.com/",
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: gql`
      query {
        country(code: "IN") {
          name
          native
          capital
          emoji
          currency
          languages {
            code
            name
          }
        }
      }
    `,
  });

  return {
    props: {
      characters: data,
    },
  };
}

export default GraphQL;
