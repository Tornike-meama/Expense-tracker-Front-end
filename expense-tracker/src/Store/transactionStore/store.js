import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isLoading: false,
    currentUserTransactions: ""
};

const transactionSlice =  createSlice({
    name: "transactionStore",
    initialState,
    reducers: {
        stopLoading(state, action) {
            state.isLoading = false;
        },
        startLoading(state, action) {
            state.isLoading = true;
        },
        setCurrentUserTransactions(state, action) {
            state.currentUserTransactions = action.payload;;
        },
    },
});

export const transactionActions = transactionSlice.actions;

export default transactionSlice.reducer;
