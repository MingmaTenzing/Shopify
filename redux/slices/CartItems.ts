import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem } from "../../types/cartItem-type";

interface CartItems {
  cart: CartItem[];
}

const initialState: CartItems = {
  cart: [],
};

export const CartItemSlice = createSlice({
  name: "CartItems",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.cart.find(
        (item) => item.id == action.payload.id
      );
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    deletefromCart: (state, action) => {
      const index = state.cart.findIndex(
        (state) => state.id == action.payload.id
      );
      state.cart.splice(index, 1);
    },
    increaseQuantity: (state, action) => {
      const itemInCart = state.cart.find(
        (item) => item.id == action.payload.id
      );
      if (itemInCart!.quantity > 0 && itemInCart!.quantity < 100) {
        itemInCart!.quantity++;
      }
    },
    decreaseQuantity: (state, action) => {
      const itemInCart = state.cart.find(
        (item) => item.id == action.payload.id
      );
      if (itemInCart!.quantity >= 2) {
        itemInCart!.quantity--;
      }
    },
  },
});

export const { addToCart, deletefromCart, increaseQuantity, decreaseQuantity } =
  CartItemSlice.actions;

export default CartItemSlice.reducer;
