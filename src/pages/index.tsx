
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Product from '../components/Product/Product';
import Header from '../components/Header/Header';
import Loader from '../components/Shared/Loader';
import { fetchProducts } from '@/features/products/productsSlice';
import { useAppDispatch, useAppSelector } from '@/hooks';
import Banner from '@/components/Banner/Banner';

const Home: React.FC = () => {
    const dispatch = useAppDispatch();
    const products = useAppSelector((state) => state.products.products);
    const productStatus = useAppSelector((state) => state.products.status);

    useEffect(() => {
        if (productStatus === 'idle') {
            dispatch(fetchProducts());
        }
    }, [productStatus, dispatch]);

    let content;

    if (productStatus === 'loading') {
        content = <Loader />;
    } else if (productStatus === 'succeeded') {
        content = (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product) => (
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
                {content}
            </main>
        </div>
    );
};

export default Home;
