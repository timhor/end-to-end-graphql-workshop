import { DataSources } from 'apollo-server-core/src/graphqlOptions';
import { ApolloContext } from '../apolloContext';
import { QuestionDataSource as InMemoryQuestionDataSource } from './inMemory/QuestionDataSource';
import { GameDataSource as InMemoryGameDataSource } from './inMemory/GameDataSource';
import { PlayerDataSource as InMemoryPlayerDataSource } from './inMemory/PlayerDataSource';

export const inMemoryDataSource: () => DataSources<ApolloContext> = () => {
  return {
    questions: new InMemoryQuestionDataSource(),
    games: new InMemoryGameDataSource(),
    players: new InMemoryPlayerDataSource(),
  };
};
