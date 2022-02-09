import {GraphQLServer} from 'graphql-yoga'
import { resolvers } from './resolvers'

const server = new GraphQLServer({
    typeDefs: './src/graphql/schema.graphql',
    resolvers: resolvers
})

server.start(() => console.log(('GraphQL Server is running')))