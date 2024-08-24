import {configureStore, combineReducers} from "@reduxjs/toolkit";
// import exampleReducer from "./slices/exampleSlice";
import authReducer from "./slices/authSlice";

// const rootReducer = combineReducers({
//   example: exampleReducer,
// });

const rootReducer = combineReducers({
  auth: authReducer,
});
const store = configureStore({
  reducer: rootReducer,
});

export default store;
