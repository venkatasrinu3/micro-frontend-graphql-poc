import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn: false,
}

const loginSlice = createSlice({
    name: "LoginReducer",
    initialState,
    reducers:{
        login: (state = initialState, action) => {
            state.isLoggedIn = true
        },
        logout: (state = initialState, action) => {
            state.isLoggedIn = false
        }
    }
})

export default loginSlice.reducer;
export const loginAction = loginSlice.actions