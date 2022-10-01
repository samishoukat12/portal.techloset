import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { editData, checkAuth } from "./reactivities/reactiveVarables";
const httpLink = createHttpLink({
    // uri: 'http://localhost:3000/graphql',
    uri: "https://training-portal-backend.herokuapp.com/graphql",
});

const authLink = setContext(async (_, { headers }) => {
    // get the authentication token from local storage if it exists
    // return the headers to the context so httpLink can read them
    const token = await localStorage.getItem("token");
    return {
        headers: {
            ...headers,
            authorization: token,
            organizationKey:
                "1bb54554831e4d61d2765760e8ce395a9b9f2d3239152768f8c589f03be5378c",
        },
    };
});

// const cache = new InMemoryCache({
//     typePolicies: {
//         Query: {
//             fields: {
//                 editData: {
//                     read() {
//                         return editData()
//                     }
//                 }
//             }
//         }
//     }
// })
const client = new ApolloClient({
    link: authLink.concat(httpLink),
    // cache,
    cache: new InMemoryCache(),
    connectToDevTools: true
});;

export default client;
