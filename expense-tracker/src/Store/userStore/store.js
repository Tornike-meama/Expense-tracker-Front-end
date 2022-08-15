import { createSlice } from "@reduxjs/toolkit"

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
        }
    },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;