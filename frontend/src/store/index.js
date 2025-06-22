import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth"; // Ensure this path is correct

const store = configureStore({
  reducer: {
    auth: authReducer, // Corrected placement
  },
});

export default store;
