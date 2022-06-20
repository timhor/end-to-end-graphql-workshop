import { ApolloServer, gql } from 'apollo-server';

const typeDefs = gql`
  type Person {
    firstName: String!
    lastName: String!
    fullName: String!
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
        firstName: 'Tim',
        lastName: 'Hor',
      };
    },
  },
  Person: {
    fullName(person) {
      return `${person.firstName} ${person.lastName}`;
    },
    // If there's a match for the field being requested, the default resolver
    // just returns that field (so here we don't need resolvers for firstName
    // and lastName)
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(() => {
  console.log('Server is running');
});
