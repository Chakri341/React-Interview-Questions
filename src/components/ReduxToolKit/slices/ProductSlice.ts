import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

// Define the types for Product and State
interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

interface ProductState {
  items: Product[];
  searchQuery: string;
  category: string;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

// Initial State
const initialState: ProductState = {
  items: [],
  searchQuery: '',
  category: 'all',
  status: 'idle',
  error: null,
};

// Async thunk for fetching products
export const fetchProducts = createAsyncThunk<Product[]>(
  'products/fetchProducts',
  async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    return await response.json();
  }
);

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    setCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action: PayloadAction<Product[]>) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Something went wrong';
      });
  },
});

export const { setSearchQuery, setCategory } = productSlice.actions;
export default productSlice.reducer;
