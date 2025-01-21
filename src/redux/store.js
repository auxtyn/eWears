import { configureStore, combineReducers, createSlice } from "@reduxjs/toolkit";
import authReducer from "./slice/authSlice";

const rootReducer = combineReducers({
    auth:authReducer,
});

const initialState = {};

const store = configureStore({
  reducer: rootReducer,
});

export default store.reducer;
