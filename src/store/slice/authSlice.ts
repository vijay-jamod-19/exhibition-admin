import { createSlice } from "@reduxjs/toolkit";
import { authApi } from "../api/authApi";
import { all_routes } from "@/routes/all_routes";

const initialState = {
  token: null,
  user: null,
  redirect: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetState: () => ({ ...initialState }),
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      authApi.endpoints.login.matchFulfilled,
      (state, { payload }: any) => {
        state.token = payload?.data?.token;
        state.user = payload?.data;
        state.redirect = all_routes.home;
      }
    );
    builder.addMatcher(authApi.endpoints.logout.matchFulfilled, (state) => {
      state.token = null;
      state.user = null;
      state.redirect = all_routes.signin;
    });
  },
});

export const { resetState } = authSlice.actions;
export default authSlice.reducer;
