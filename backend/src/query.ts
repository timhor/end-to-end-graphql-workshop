import { GameState, type QueryResolvers } from './generated/graphql';

export const Query: QueryResolvers = {
  game(_parent, args) {
    return {
      id: args.id,
      players: [],
      state: GameState.WaitingForPlayers,
      questions: [],
      answers: [],
    };
  },
  games() {
    return [
      {
        id: '123',
        state: GameState.Completed,
        players: [],
        questions: [],
        answers: [],
      },
    ];
  },
};
