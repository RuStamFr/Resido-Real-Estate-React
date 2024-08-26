import { createSlice } from "@reduxjs/toolkit";
import { categories } from "../../data/categories";

const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    categories: [],
  },
  reducers: {
    fetchCategories: (state) => {
      state.categories = categories;
    },
  },
});

export const { fetchCategories } = categoriesSlice.actions;

export default categoriesSlice.reducer;
