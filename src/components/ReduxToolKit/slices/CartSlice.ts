import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the types for CartItem and State
interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  total: number;
}

// Initial State
const initialState: CartState = {
  items: [],
  total: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      state.total += action.payload.price * action.payload.quantity;
    },
    removeFromCart: (state, action: PayloadAction<{ id: number }>) => {
      const index = state.items.findIndex(item => item.id === action.payload.id);
      if (index !== -1) {
        state.total -= state.items[index].price * state.items[index].quantity;
        state.items.splice(index, 1);
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.total = 0;
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
