import React, { useState } from 'react';
import ModalProduct from './ModalProduct';
import { Product as IProduct } from '@/types';

const Product = ({ product }: { product: IProduct }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
    const DESCRIPTION_LIMIT = 100;

    const truncatedDescription = product.description.length > DESCRIPTION_LIMIT
        ? product.description.substring(0, DESCRIPTION_LIMIT) + '...'
        : product.description;

    return (
        <div className="border rounded-lg shadow-lg p-4 transition-transform transform hover:scale-105 hover:shadow-xl">
            <img
                src={product.image}
                alt={product.title}
                className="w-full h-64 object-cover mb-4 rounded cursor-pointer"
                onClick={() => setIsModalOpen(true)}
            />
            <h2 className="text-lg font-bold mb-2">{product.title}</h2>
            <p className="text-gray-700 mb-2">
                {isDescriptionExpanded ? product.description : truncatedDescription}
                {product.description.length > DESCRIPTION_LIMIT && (
                    <button
                        className="text-blue-500 ml-1"
                        onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}
                    >
                        {isDescriptionExpanded ? 'Voir moins' : 'Voir plus'}
                    </button>
                )}
            </p>
            <p className="text-blue-500 font-semibold text-xl mb-4">${product.price}</p>
            <button
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-300"
                onClick={() => setIsModalOpen(true)}
            >
                View Details
            </button>
            <ModalProduct product={product} isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)} />
        </div>
    );
};

export default Product;
