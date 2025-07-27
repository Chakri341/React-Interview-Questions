import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the types for Orders
interface Order {
  id: number;
  items: { id: number; name: string; price: number; quantity: number }[];
  total: number;
  date: string;
}

interface OrderState {
  orders: Order[];
}

// Initial State
const initialState: OrderState = {
  orders: [],
};

const orderSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    addOrder: (state, action: PayloadAction<Order>) => {
      state.orders.push(action.payload);
    },
  },
});

export const { addOrder } = orderSlice.actions;
export default orderSlice.reducer;
