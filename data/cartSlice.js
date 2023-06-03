import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      if (!action.payload.count) {
        action.payload.count = 1;
        state.items.push(action.payload);
      } else {
        state.items = state.items.map((item) =>
          item.id === action.payload.id
            ? { ...item, count: item.count + 1 }
            : item
        );
      }
    },
    removeItem: (state, action) => {
      if (action.payload.count > 1) {
        state.items = state.items.map((item) =>
          item.id === action.payload.id
            ? { ...item, count: item.count - 1 }
            : item
        );
      } else {
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
      }
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
