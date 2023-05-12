import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      // state.items=[...state.items,action.payload]
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    emptyCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeItem, emptyCart } = cartSlice.actions;
export default cartSlice.reducer;
