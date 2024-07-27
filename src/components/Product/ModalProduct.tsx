import React from 'react';
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { addItem } from '../../features/cart/cartSlice';
import { Product, CartItem } from '@/types';

Modal.setAppElement('#__next');

interface ModalProductProps {
    product: Product;
    isOpen: boolean;
    onRequestClose: () => void;
}

const ModalProduct: React.FC<ModalProductProps> = ({ product, isOpen, onRequestClose }) => {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        const cartItem: CartItem = {
            productId: product.id,
            title: product.title,
            price: product.price,
            quantity: 1,
        };
        dispatch(addItem(cartItem));
        onRequestClose();
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Product Details"
            className="modal-content"
            overlayClassName="modal-overlay"
        >
            <div className="bg-white rounded-lg overflow-hidden shadow-lg transform transition-all sm:max-w-lg sm:w-full">
                <div className="p-4">
                    <img src={product.image} alt={product.title} className="w-full h-64 object-cover mb-4 rounded-lg" />
                    <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
                    <p className="text-gray-700 mb-4">{product.description}</p>
                    <p className="text-blue-500 font-semibold text-xl mb-4">${product.price}</p>
                    <button
                        className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
                        onClick={handleAddToCart}
                    >
                        Add to Cart
                    </button>
                    <button
                        className="w-full mt-2 bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 transition duration-300"
                        onClick={onRequestClose}
                    >
                        Close
                    </button>
                </div>
            </div>
        </Modal>
    );
};

export default ModalProduct;
