import { configureStore } from "@reduxjs/toolkit";
import UsersReducer from "./UsersReducer";
import LoginReducer from "./LoginReducer";

export const store = configureStore({
    reducer: {
        usersState: UsersReducer,
        loginState: LoginReducer
    }
})