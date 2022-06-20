import { ApolloServer, gql } from 'apollo-server';

const typeDefs = gql`
  type Person {
    name: String!
  }

  # special GraphQL type name Query
  type Query {
    person: Person!
  }
`;

const resolvers = {
  Query: {
    person() {
      return {
        name: 'Tim',
      };
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(() => {
  console.log('Server is running');
});
