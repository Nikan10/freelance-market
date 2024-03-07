import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  orders: [],
  isLoading: false,
  error: null,
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    fetchOrdersStart(state) {
      state.isLoading = true;
      state.error = null;
    },
    fetchOrdersSuccess(state, action) {
      state.orders = action.payload;
      state.isLoading = false;
    },
    fetchOrdersFailure(state, action) {
      state.error = action.payload;
      state.isLoading = false;
    },
    placeOrder(state, action) {
      state.orders.push(action.payload);
    },
  },
});

export const { fetchOrdersStart, fetchOrdersSuccess, fetchOrdersFailure, placeOrder } = orderSlice.actions;
export default orderSlice.reducer;