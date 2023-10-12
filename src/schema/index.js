import { makeExecutableSchema } from 'graphql-tools';
import typeDefs from './typedefs/index.js';
import resolvers from './resolvers/index.js';

const schema = makeExecutableSchema({
  typeDefs: typeDefs,
  resolvers
});

export default schema;