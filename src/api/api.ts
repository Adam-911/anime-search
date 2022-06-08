import { ApolloClient, InMemoryCache } from "@apollo/client"

export const client = new ApolloClient({
    uri: 'https://graphql.anilist.co',//process.env.REACT_APP_SERVER,
    cache: new InMemoryCache()
});