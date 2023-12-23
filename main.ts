import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { Query } from "./resolvers/query.ts";
import { Mutation } from "./resolvers/mutation.ts";
import { Conductor } from "./resolvers/Conductor.ts";
import { Viaje } from "./resolvers/Viaje.ts";
import { Cliente } from "./resolvers/Cliente.ts";
import { typeDefs } from "./gql/schema.ts";
import montoose from "mongoose";

const MONGO_URL = "mongodb+srv://jesuscalleruiz:bXtR3dANxBRhh5Fk@cluster0.qeuki4l.mongodb.net/P4DB?retryWrites=true&w=majority"
if (!MONGO_URL) {
  throw new Error("Please provide a MongoDB connection string");
}

// Connect to MongoDB
await montoose.connect(MONGO_URL);

console.info("🚀 Connected to MongoDB");

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Mutation,
    Conductor,
    Cliente,
    Viaje,
  },
});

const { url } = await startStandaloneServer(server);
console.info(`🚀 Server ready at ${url}`);
