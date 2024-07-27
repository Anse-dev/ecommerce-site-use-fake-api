import Link from 'next/link';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';

const Header = () => {
    const cartItems = useSelector((state: RootState) => state.cart.items);
    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

    return (
        <header className="bg-black fixed left-0 right-0 z-50 text-white p-4 shadow-md">
            <nav className="flex justify-between items-center container mx-auto">
                <Link href="/" >
                    <span className="text-2xl font-bold hover:text-gray-200 transition duration-300">E-commerce</span>
                </Link>
                <div className="flex space-x-4 items-center">
                    <Link href="/">
                        <span className="hover:underline hover:text-gray-200 transition duration-300">Home</span>
                    </Link>
                    <Link href="/cart">
                        <span className="relative hover:underline hover:text-gray-200 transition duration-300">
                            Cart
                            {totalItems > 0 && (
                                <span className="absolute top-0 right-0 bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                                    {totalItems}
                                </span>
                            )}
                        </span>
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;

