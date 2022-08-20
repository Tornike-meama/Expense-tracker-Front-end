import { configureStore } from '@reduxjs/toolkit'

import userReducer from "./userStore/store";
import transacionReducer from "./transactionStore/store.js";

const store = configureStore({
  reducer: {
    user: userReducer,
    transaction: transacionReducer
  },
});

export default store;