
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '@/types';

export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    image: string;
}

export interface ProductsState {
    products: Product[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: ProductsState = {
    products: [],
    status: 'idle',
    error: null,
};

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    return response.json() as Promise<Product[]>;
});

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.products = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || 'Failed to load products';
            });
    },
});

export default productsSlice.reducer;
