
export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    image: string;
}

export interface CartItem {
    productId: number;
    title: string;
    price: number;
    quantity: number;
}

export interface ProductsState {
    products: Product[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

export interface CartState {
    items: CartItem[];
    totalAmount: number;
}

export interface RootState {
    products: ProductsState;
    cart: CartState;
}
