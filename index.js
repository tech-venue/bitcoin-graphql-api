const { GraphQLServer } = require('graphql-yoga');
const typeDefs = require('./graphql/types');
const resolvers = require('./graphql/resolvers');

const server = new GraphQLServer({
  typeDefs,
  resolvers,
  context: {
    resolvers,
  },
});

server.start(() => {
  console.log('server running on localhost:4000');
});
