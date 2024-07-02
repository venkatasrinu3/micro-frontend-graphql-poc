import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    usersList: [],
}

const usersSlice = createSlice({
    name: "usersData",
    initialState,
    reducers: {
        addUsers: (state = initialState, action) => {
            state.usersList = [...state.usersList,action.payload]
        }
    }
})

export default usersSlice.reducer;
export const UserActions = usersSlice.actions