import { createSlice } from "@reduxjs/toolkit";
import { propertyPosts } from "../../data/propertyPosts";

const propertyPostsSlice = createSlice({
  name: "propertyPosts",
  initialState: {
    propertyPosts: [],
    selectedPropertyPost: null,
    relatedPropertyPosts: [],
  },
  reducers: {
    fetchPropertyPosts: (state) => {
      state.propertyPosts = propertyPosts;
    },
    fetchPropertyPostDetails: (state, action) => {
      const id = action.payload;
      state.selectedPropertyPost = propertyPosts.find(
        (post) => +post.id === +id
      );
    },
    fetchRelatedPropertyPosts: (state, action) => {
      const id = action.payload;
      state.relatedPropertyPosts = propertyPosts.filter(
        (post) => post.categories_id === id
      );
    },
  },
});

export const {
  fetchPropertyPosts,
  fetchPropertyPostDetails,
  fetchRelatedPropertyPosts,
} = propertyPostsSlice.actions;

export default propertyPostsSlice.reducer;
