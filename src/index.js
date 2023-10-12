import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

import schema from './schema/index.js';

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
    schema,
    introspection: true,
    includeStacktraceInErrorResponses: false,
    formatError: (formattedError, error) => {
      if (formattedError.message.startsWith('User: ')) {
        return { message: 'Internal server error' };
      }
      // Otherwise return the formatted error.
      return formattedError;
      },
  });


  // Passing an ApolloServer instance to the `startStandaloneServer` function:
  //  1. creates an Express app
  //  2. installs your ApolloServer instance as middleware
  //  3. prepares your app to handle incoming requests
  const startServer = async() => {
    // console.log(`Environment: ${JSON.stringify(process.env, null, 4)}`)
    const { url } = await startStandaloneServer(server, {
      listen: { port: 4000 },
    });

    console.log(`🚀  Server ready at: ${url}`);
  };

  startServer()