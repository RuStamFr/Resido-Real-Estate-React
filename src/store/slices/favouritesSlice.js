import {createSlice} from "@reduxjs/toolkit";

const loadFavorites = () => {
  const savedFavorites = localStorage.getItem("favorites");
  return savedFavorites ? JSON.parse(savedFavorites) : [];
};

const saveFavorites = (favorites) => {
  localStorage.setItem("favorites", JSON.stringify(favorites));
};

const clearFavoritesFromStorage = () => {
  localStorage.removeItem("favorites");
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: loadFavorites(),
  reducers: {
    addFavorite: (state, action) => {
      if (!state.some((property) => property.id === action.payload.id)) {
        state.push(action.payload);
        saveFavorites(state);
      }
    },
    removeFavorite: (state, action) => {
      const updatedState = state.filter(
        (property) => property.id !== action.payload.id
      );
      saveFavorites(updatedState);
      return updatedState;
    },
    resetFavorites: (state) => {
      clearFavoritesFromStorage();
      return [];
    },
  },
});

export const {addFavorite, removeFavorite, resetFavorites} =
  favoritesSlice.actions;

export default favoritesSlice.reducer;
