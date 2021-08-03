const { ApolloServer } = require("apollo-server");

const db = require("./config/connection");

const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");
const context = require("./context");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context,
});

db.once("open", () => {
  server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
});
