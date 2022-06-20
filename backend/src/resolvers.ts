export const resolvers = {
  Query: {
    game(_parent, args, _context, _info) {
      return {
        id: args.id,
        players: [],
        state: 'WaitingForPlayers',
        question: [],
        answers: [],
      };
    },
    games() {
      return [
        {
          id: '123',
          state: 'Completed',
          players: [],
          questions: [],
          answers: [],
        },
      ];
    },
  },
};
