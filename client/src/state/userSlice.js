import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentUser: null,
  token: '',
  isLoggedIn: false,
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginStart(state) {
      state.isLoading = true;
      state.error = null;
    },
    loginSuccess(state, action) {
      state.currentUser = action.payload;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    loginFailure(state, action) {
      state.error = action.payload;
      state.isLoading = false;
    },
    logout(state) {
      state.currentUser = null;
      state.isLoggedIn = false;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logout } = userSlice.actions;
export default userSlice.reducer;
