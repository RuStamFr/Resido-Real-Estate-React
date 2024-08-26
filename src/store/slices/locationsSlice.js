import { createSlice } from "@reduxjs/toolkit";
import { locations } from "../../data/locations";

const locationsSlice = createSlice({
  name: "locations",
  initialState: {
    locations: [],
  },
  reducers: {
    fetchLocations: (state) => {
      state.locations = locations;
    },
  },
});

export const { fetchLocations } = locationsSlice.actions;

export default locationsSlice.reducer;
