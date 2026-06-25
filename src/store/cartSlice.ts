import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Book } from "../data/books";

export interface CartItem {
  id: string;
  title: string;
  author: string;
  price: number;
  coverColor: string;
  coverAccent: string;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  isOpen: boolean;
}

const initialState: CartState = {
  items: [],
  isOpen: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<Book>) {
      const book = action.payload;
      const existing = state.items.find((i) => i.id === book.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({
          id: book.id,
          title: book.title,
          author: book.author,
          price: book.price,
          coverColor: book.coverColor,
          coverAccent: book.coverAccent,
          quantity: 1,
        });
      }
      state.isOpen = true;
    },
    removeFromCart(state, action: PayloadAction<string>) {
      state.items = state.items.filter((i) => i.id !== action.payload);
    },
    updateQuantity(state, action: PayloadAction<{ id: string; quantity: number }>) {
      const item = state.items.find((i) => i.id === action.payload.id);
      if (item) {
        item.quantity = Math.max(1, action.payload.quantity);
      }
    },
    clearCart(state) {
      state.items = [];
    },
    openCart(state) {
      state.isOpen = true;
    },
    closeCart(state) {
      state.isOpen = false;
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart, openCart, closeCart } =
  cartSlice.actions;
export default cartSlice.reducer;