import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '@/types';

export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    image: string;
    category: string; // Ajoutez cette propriété si nécessaire
    rating: {
        rate: number;
        count: number;
    };
}

export interface ProductsState {
    products: Product[];
    filteredProducts: Product[]; // Pour gérer les produits filtrés
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
    filters: {
        category: string;
        priceRange: [number, number];
        rating: number;
        searchTerm: string; // Pour la recherche
    };
    sortBy: string; // Pour le tri
}

const initialState: ProductsState = {
    products: [],
    filteredProducts: [],
    status: 'idle',
    error: null,
    filters: {
        category: '',
        priceRange: [0, 100], // Ajustez selon vos besoins
        rating: 0,
        searchTerm: '',
    },
    sortBy: 'default',
};

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    return response.json() as Promise<Product[]>;
});

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setCategoryFilter(state, action) {
            state.filters.category = action.payload;
        },
        setPriceRange(state, action) {
            state.filters.priceRange = action.payload;
        },
        setRatingFilter(state, action) {
            state.filters.rating = action.payload;
        },
        setSearchTerm(state, action) {
            state.filters.searchTerm = action.payload;
        },
        setSortBy(state, action) {
            state.sortBy = action.payload;
        },
        applyFilters(state) {
            const { category, priceRange, rating, searchTerm } = state.filters;

            state.filteredProducts = state.products
                .filter(product =>
                    category ? product.category === category : true
                )
                .filter(product =>
                    product.price >= priceRange[0] && product.price <= priceRange[1]
                )
                .filter(product =>
                    product.rating.rate >= rating
                )
                .filter(product =>
                    product.title.toLowerCase().includes(searchTerm.toLowerCase())
                );

            // Tri des produits filtrés
            if (state.sortBy === 'priceAsc') {
                state.filteredProducts.sort((a, b) => a.price - b.price);
            } else if (state.sortBy === 'priceDesc') {
                state.filteredProducts.sort((a, b) => b.price - a.price);
            } else if (state.sortBy === 'popularity') {
                state.filteredProducts.sort((a, b) => b.rating.count - a.rating.count);
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.products = action.payload;
                state.filteredProducts = action.payload; // Initialiser les produits filtrés
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || 'Failed to load products';
            });
    },
});

export const { setCategoryFilter, setPriceRange, setRatingFilter, setSearchTerm, setSortBy, applyFilters } = productsSlice.actions;

export default productsSlice.reducer;
