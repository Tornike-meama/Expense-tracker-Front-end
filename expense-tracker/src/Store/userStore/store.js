import { createSlice } from "@reduxjs/toolkit"
import { removeToken } from "./actions.js";

const initialState = {
    isLoading: false,
    isAuth: false, 
    userData: ""
};

const userSlice =  createSlice({
    name: "userStore",
    initialState,
    reducers: {
        stopLoading(state, action) {
            state.isLoading = false;
        },
        startLoading(state, action) {
            state.isLoading = true;
        },
        setLogedUserData(state, action) {
            const userData = action.payload;
            state.userData = userData;
        },
        loginUser(state, action) {
            state.isAuth = true;
        },
        logoutUser(state, action) {
            state.isAuth = false;
            removeToken();
        },
        initiUserAuth(state, action) {
            if(localStorage.getItem("userToken")) state.isAuth = true;
        }
    },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
