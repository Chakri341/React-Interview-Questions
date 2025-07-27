import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the type for AuthState
interface User {
  id: number;
  name: string;
  email: string;
}

interface AuthState {
  user: User | null;
}

// Initial State
const initialState: AuthState = {
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
