import { createSlice } from "@reduxjs/toolkit";
import { agents } from "../../data/agents";

const agentsSlice = createSlice({
  name: "agents",
  initialState: {
    agents: [],
  },
  reducers: {
    fetchAgents: (state) => {
      state.agents = agents;
    },
  },
});

export const { fetchAgents } = agentsSlice.actions;

export default agentsSlice.reducer;
