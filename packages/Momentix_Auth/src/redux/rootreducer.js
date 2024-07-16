import { combineReducers } from "redux";
import LoginReducer from "./LoginReducer";
import UsersReducer from "./UsersReducer";

export const rootreducer = combineReducers({
    usersState: UsersReducer,
    loginState: LoginReducer
})