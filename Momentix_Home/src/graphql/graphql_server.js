import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context"

const httpLink = createHttpLink({
    uri: "http://localhost:4502/content/_cq_graphql/global/endpoint.json"
})

const authLink = setContext((_, {headers})=>{
    const username = "admin";
    const password = "admin";
    return{
        headers: {
            ...headers,
            authorization: `Basic ${btoa(`${username}:${password}`)}`,
        }
    }
})

const client = new ApolloClient({
    link:authLink.concat(httpLink),
    cache: new InMemoryCache()
})

export default client;