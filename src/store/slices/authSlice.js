import {createSlice} from "@reduxjs/toolkit";

const getInitialUsers = () => {
  try {
    const users = localStorage.getItem("users");
    return users ? JSON.parse(users) : [];
  } catch (error) {
    return [];
  }
};
const initialState = {
  auth: false,
  users: getInitialUsers(),
  currentUser: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    registerUser: (state, action) => {
      state.users.push(action.payload);
      localStorage.setItem("users", JSON.stringify(state.users));
    },
    logOutUser: (state) => {},
    logInUser: (state, action) => {},
  },
});

export const {registerUser, logOutUser, logInUser} = authSlice.actions;
export default authSlice.reducer;
