import { createSlice } from "@reduxjs/toolkit";

const filteredPropertyPostsSlice = createSlice({
  name: "filteredPropertyPosts",
  initialState: {
    filteredPropertyPosts: [],
    selectedFilters: {
      company: -1,
      location: -1,
      category: -1,
    },
  },
  reducers: {
    setFilteredPropertyPosts: (state, action) => {
      state.filteredPropertyPosts = action.payload;
    },
    setFilters: (state, action) => {
      state.selectedFilters = action.payload;
    },
  },
});

export const { setFilteredPropertyPosts, setFilters } =
  filteredPropertyPostsSlice.actions;

export default filteredPropertyPostsSlice.reducer;
