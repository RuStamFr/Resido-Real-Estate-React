import {createSlice} from "@reduxjs/toolkit";

const getInitialUsers = () => {
  try {
    const auth = localStorage.getItem("isLogIn");
    const currentUser = localStorage.getItem("currentUser");
    const users = localStorage.getItem("users");
    return {
      users: users ? JSON.parse(users) : [],
      auth: auth ? JSON.parse(auth) : false,
      currentUser: currentUser ? JSON.parse(currentUser) : null,
    };
  } catch (error) {
    return {auth: false, users: [], currentUser: null};
  }
};
const initialState = {
  auth: getInitialUsers().auth,
  users: getInitialUsers().users,
  currentUser: getInitialUsers().currentUser,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    registerUser: (state, action) => {
      state.users.push(action.payload);
      localStorage.setItem("users", JSON.stringify(state.users));
    },
    logOutUser: (state) => {
      state.auth = false;
      state.currentUser = null;
      localStorage.setItem("isLogIn", false);
      localStorage.setItem("currentUser", null);
    },
    logInUser: (state, action) => {
      state.users.push(action.payload);
      const user = state.users.find(
        (user) =>
          user.email === action.payload.email &&
          user.password === action.payload.password
      );
      if (user) {
        state.auth = true;
        state.currentUser = user;
        localStorage.setItem("isLogIn", true);
        localStorage.setItem("currentUser", JSON.stringify(state.currentUser));
      }
    },
  },
});

export const {registerUser, logOutUser, logInUser} = authSlice.actions;
export default authSlice.reducer;
