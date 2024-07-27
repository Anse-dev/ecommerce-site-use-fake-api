import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setCategoryFilter, setPriceRange, setRatingFilter, setSearchTerm, applyFilters, setSortBy } from '../../features/products/productsSlice';

const ProductFilters = () => {
    const dispatch = useDispatch();
    const [priceRange, setPriceRangeState] = useState<[number, number]>([0, 100]);
    const [rating, setRatingState] = useState(0);
    const [searchTerm, setSearchTermState] = useState('');

    const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(setCategoryFilter(e.target.value));
        dispatch(applyFilters());
    };

    const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.target.value);
        const name = e.target.name;
        setPriceRangeState(prevRange => {
            const newRange = [...prevRange];
            if (name === 'min') {
                newRange[0] = value;
            } else {
                newRange[1] = value;
            }
            return newRange as [number, number];
        });
        dispatch(setPriceRange([priceRange[0], priceRange[1]]));
        dispatch(applyFilters());
    };

    const handleRatingChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newRating = Number(e.target.value);
        setRatingState(newRating);
        dispatch(setRatingFilter(newRating));
        dispatch(applyFilters());
    };

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchTermState(value);
        dispatch(setSearchTerm(value));
        dispatch(applyFilters());
    };

    const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(setSortBy(e.target.value));
        dispatch(applyFilters());
    };

    return (
        <div className="flex flex-col md:flex-row md:space-x-4 mb-4">
            <input
                type="text"
                placeholder="Search Products"
                value={searchTerm}
                onChange={handleSearchChange}
                className="border rounded p-2 mb-2 md:mb-0"
            />
            <select onChange={handleCategoryChange} className="border rounded p-2 mb-2 md:mb-0">
                <option value="">All Categories</option>
                <option value="electronics">Electronics</option>
                <option value="jewelery">Jewelry</option>
                <option value="men's clothing">Men's Clothing</option>
                <option value="women's clothing">Women's Clothing</option>
            </select>
            <div className="flex space-x-2 mb-2 md:mb-0">
                <input
                    type="number"
                    name="min"
                    value={priceRange[0]}
                    onChange={handlePriceChange}
                    placeholder="Min Price"
                    className="border rounded p-2"
                />
                <input
                    type="number"
                    name="max"
                    value={priceRange[1]}
                    onChange={handlePriceChange}
                    placeholder="Max Price"
                    className="border rounded p-2"
                />
            </div>
            <select onChange={handleRatingChange} className="border rounded p-2 mb-2 md:mb-0">
                <option value="0">All Ratings</option>
                <option value="1">1 Star & Up</option>
                <option value="2">2 Stars & Up</option>
                <option value="3">3 Stars & Up</option>
                <option value="4">4 Stars & Up</option>
            </select>
            <select onChange={handleSortChange} className="border rounded p-2 mb-2 md:mb-0">
                <option value="default">Default</option>
                <option value="priceAsc">Price: Low to High</option>
                <option value="priceDesc">Price: High to Low</option>
                <option value="popularity">Popularity</option>
            </select>
        </div>
    );
};

export default ProductFilters;
