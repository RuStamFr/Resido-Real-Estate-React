import {configureStore, combineReducers} from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import categoriesReducer from "./slices/categoriesSlice";
import agentsReducer from "./slices/agentsSlice";
import locationsReducer from "./slices/locationsSlice";
import propertyPostsReducer from "./slices/propertyPostsSlice";
import filteredPropertyPostsReducer from "./slices/filteredPropertyPostsSlice";
import favouritesReducer from "./slices//favouritesSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  categories: categoriesReducer,
  agents: agentsReducer,
  locations: locationsReducer,
  propertyPosts: propertyPostsReducer,
  filteredPropertyPosts: filteredPropertyPostsReducer,
  favourites: favouritesReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
