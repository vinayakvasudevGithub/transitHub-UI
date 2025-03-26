import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("auth")) || {
  user: null,
  accessToken: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loggedIn: (state, action) => {
      const { user, accessToken } = action.payload;
      state.user = user;
      state.accessToken = accessToken;

      localStorage.setItem("auth", JSON.stringify({ user, accessToken }));
    },
    loggedOut: (state) => {
      state.user = null;
      state.accessToken = null;

      localStorage.removeItem("auth");
    },
  },
});

export const { loggedIn, loggedOut } = userSlice.actions;
export default userSlice.reducer;
