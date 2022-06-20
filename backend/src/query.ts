import { UserInputError } from 'apollo-server';
import type { QueryResolvers } from './generated/graphql';

export const Query: QueryResolvers = {
  async game(_, { id }, context) {
    const game = await context.dataSources.games.getGame(id);

    if (!game) {
      throw new UserInputError(`ID ${id} does not match a known game`);
    }

    return game;
  },
  games(_, __, context) {
    return context.dataSources.games.getGames();
  },
};
