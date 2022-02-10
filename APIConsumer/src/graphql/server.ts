import {GraphQLServer} from 'graphql-yoga'
import { resolvers } from './resolvers'

// Creating a new GraphQL server
const server = new GraphQLServer({
    typeDefs: './src/graphql/schema.graphql',
    resolvers: resolvers
})

server.start(() => console.log(('GraphQL Server is running on PORT 4000. Visit http://localhost:4000/graphql')));