import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  gigs: [],
  isLoading: false,
  error: null,
};

const gigSlice = createSlice({
  name: 'gig',
  initialState,
  reducers: {
    fetchGigsStart(state) {
      state.isLoading = true;
      state.error = null;
    },
    fetchGigsSuccess(state, action) {
      state.gigs = action.payload;
      state.isLoading = false;
    },
    fetchGigsFailure(state, action) {
      state.error = action.payload;
      state.isLoading = false;
    },
    createGig(state, action) {
      state.gigs.push(action.payload);
    },
  },
});

export const { fetchGigsStart, fetchGigsSuccess, fetchGigsFailure, createGig } = gigSlice.actions;
export default gigSlice.reducer;
