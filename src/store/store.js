import { configureStore, combineReducers } from "@reduxjs/toolkit";
import exampleReducer from "./slices/exampleSlice";

const rootReducer = combineReducers({
  example: exampleReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
