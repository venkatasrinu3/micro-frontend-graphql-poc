import { createSlice } from "@reduxjs/toolkit";
import { GET_USER_DATA } from "../graphql/queries";
import client from "../graphql/graphql_server";
import { getUsersApi, postUserApi } from "../graphql/api";
import { GraphQLClient, gql } from "graphql-request";

const postClient = new GraphQLClient("http://localhost:8080");
export const SIGNUP_USER = gql`
mutation AddUserData($name:String, $age:Int, $gender:String, $email: String){
    addUser(name: $name, age: $age, gender: $gender, email: $email){
        name, age, email, gender
    }
}
`

const initialState = {
    usersList: [],
    isLoading: false,
    isAddLoading: false,
    error: "",
    postError: ""
}

const usersSlice = createSlice({
    name: "usersData",
    initialState,
    reducers: {
        addUsers: (state = initialState, action) => {
            state.usersList = [...state.usersList, action.payload]
        },
        getUsersRequest: (state) => {
            state.isLoading = true
        },
        getUsersSuccess: (state, action) => {
            state.usersList = action.payload
        },
        getUsersFailure: (state, action) => {
            state.error = action.payload
        },
        addUserRequest: (state) => {
            state.isAddLoading = true
        },
        addUserSuccess: (state, action) => {
            state.usersList = [...state.usersList, action.payload]
        },
        addUserFailure: (state, action) => {
            state.postError = action.payload
        }
    }
})

const { getUsersRequest, getUsersSuccess, getUsersFailure, addUserRequest, addUserSuccess, addUserFailure } = usersSlice.actions;

export const getUser = () => async (dispatch) => {

    dispatch(getUsersRequest());
    try {
        const { loading: isLoading, error, data } = await getUsersApi;
        console.log("This is the data from Graphql inside redux thunk", data);
        dispatch(getUsersSuccess(data));
    } catch (err) {
        dispatch(getUsersFailure(err));
    }
}

export const addUser = (reqBody) => async (dispatch) => {
    dispatch(addUserRequest())
    try {
        const response = await postClient.request(SIGNUP_USER,reqBody)
        console.log("This is the response from thje post API", response.adduser)
        dispatch(addUserSuccess(response?.addUser))
    }
    catch (err) {
        console.error("This is the error", err);
    }
}

export default usersSlice.reducer;
export const UserActions = usersSlice.actions