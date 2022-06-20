export const resolvers = {
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
