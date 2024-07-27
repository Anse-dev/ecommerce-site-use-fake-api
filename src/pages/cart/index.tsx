
import React from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { removeItem } from '@/features/cart/cartSlice';
import Header from '@/components/Header/Header';

const Cart: React.FC = () => {
    const dispatch = useAppDispatch();
    const items = useAppSelector((state) => state.cart.items);
    const totalAmount = useAppSelector((state) => state.cart.totalAmount);

    const handleRemoveItem = (productId: number) => {
        dispatch(removeItem(productId));
    };

    return (
        <div>
            <Header />
            <main className="container mx-auto p-4">
                <h1 className="text-2xl font-bold mb-4">Cart</h1>
                <ul className="divide-y divide-gray-200">
                    {items.map((item) => (
                        <li key={item.productId} className="py-4 flex justify-between items-center">
                            <div>
                                <h2 className="text-lg font-semibold">{item.title}</h2>
                                <p className="text-gray-700">${item.price}</p>
                            </div>
                            <button
                                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                                onClick={() => handleRemoveItem(item.productId)}
                            >
                                Remove
                            </button>
                        </li>
                    ))}
                </ul>
                <p className="text-xl font-bold mt-4">Total Amount: ${totalAmount}</p>
            </main>
        </div>
    );
};

export default Cart;
