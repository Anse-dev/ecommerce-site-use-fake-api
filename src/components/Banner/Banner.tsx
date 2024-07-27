
import React from 'react';

const Banner: React.FC = () => {
    return (
        <div className="bg-blue-800 pt-28 text-white p-4 text-center">
            <h2 className="text-lg font-bold">Welcome to Our E-commerce Site!</h2>
            <p className="mt-2">Get the best deals on your favorite products!</p>
            <button className="mt-4 bg-white text-blue-800 px-4 py-2 rounded hover:bg-gray-200 transition duration-300">
                Shop Now
            </button>
        </div>
    );
};

export default Banner;
