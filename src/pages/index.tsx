
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Product from '../components/Product/Product';
import Header from '../components/Header/Header';
import Loader from '../components/Shared/Loader';
import { fetchProducts } from '@/features/products/productsSlice';
import { useAppDispatch, useAppSelector } from '@/hooks';
import Banner from '@/components/Banner/Banner';
import ProductFilters from '@/components/Product/ProductFilters';


const Home: React.FC = () => {
    const dispatch = useAppDispatch();
    const products = useAppSelector((state) => state.products.products);
    const productStatus = useAppSelector((state) => state.products.status);
    const { category, priceRange, rating } = useAppSelector((state) => state.products.filters)
    const sortBy = useAppSelector((state) => state.products.sortBy);

    useEffect(() => {
        if (productStatus === 'idle') {
            dispatch(fetchProducts());
        }
    }, [productStatus, dispatch]);

    let filteredProducts = products
        .filter(product => (category ? product.category === category : true))
        .filter(product => product.price >= priceRange[0] && product.price <= priceRange[1])
        .filter(product => product.rating.rate >= rating);

    if (sortBy === 'priceAsc') {
        filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'priceDesc') {
        filteredProducts.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'popularity') {
        filteredProducts.sort((a, b) => b.rating.count - a.rating.count);
    }

    let content;

    if (productStatus === 'loading') {
        content = <Loader />;
    } else if (productStatus === 'succeeded') {
        content = (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                    <Product key={product.id} product={product} />
                ))}
            </div>
        );
    } else if (productStatus === 'failed') {
        content = <p className="text-red-500">Failed to load products.</p>;
    }

    return (
        <div>
            <Header />
            <Banner />
            <main className="container mx-auto p-4">
                <h1 className="text-2xl font-bold mb-4">Products</h1>
                <ProductFilters />
                {content}
            </main>
        </div>
    );
};

export default Home;
