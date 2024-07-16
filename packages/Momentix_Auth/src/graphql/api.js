import client from "./graphql_server";
import { ADD_NEW_USER, GET_USER_DATA } from "./queries";

export const getUsersApi = client.query({
    query: GET_USER_DATA
})

// export function postUserApi(reqBody) {
//     console.log("This is the request body form the thunk", reqBody);
//     return client.request(ADD_NEW_USER, reqBody)
// } 