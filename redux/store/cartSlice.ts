import { CartSlice, RootState } from "@/common/interfaces/redux.interfaces";
import { createSlice } from "@reduxjs/toolkit";

const initialState: RootState = { cart: [] };

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: { payload: CartSlice; type: string }) => {
      const item = state.cart.find((p) => p.id === action.payload.id);
      if (item) {
        item.quantity++;
        item.attributes.price = item.oneQuantityPrice * item.quantity;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    updateCart: (state, action) => {
      state.cart = state.cart.map((p) => {
        if (p.id === action.payload.id) {
          if (action.payload.key === "quantity") {
            p.attributes.price = p.oneQuantityPrice * action.payload.val;
          }
          return { ...p, [action.payload.key]: action.payload.val };
        }
        return p;
      });
    },
    removeItem: (state, action) => {
      state.cart = state.cart.filter((p) => p.id != action.payload.id);
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const { addToCart, updateCart, removeItem } = cartSlice.actions;
