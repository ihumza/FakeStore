import { createSlice } from "@reduxjs/toolkit";

export const userReducer = createSlice({
    name: "user",
    initialState: {
        loading: false,
        userInfo: {}, // for user object
        userToken: null, // for storing the JWT
        error: null,
        success: false,
    },
    reducers: {
        login: (state, action) => {
            state.userToken = action.payload;
        },
        logout: (state) => {
            state.userToken = null
        }
    }
});

export const { login, logout } = userReducer.actions;

export default userReducer.reducer;