import { useState, useEffect } from 'react';

const Banner = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        'Welcome to our store!',
        'Enjoy our summer sale!',
        'Free shipping on orders over $50!',
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(interval);
    }, [slides.length]);

    return (
        <div className="relative overflow-hidden h-16 bg-blue-600 text-white flex items-center justify-center">
            <div className="absolute flex whitespace-nowrap" style={{ transform: `translateX(-${currentSlide * 100}%)`, transition: 'transform 0.5s ease-in-out' }}>
                {slides.map((slide, index) => (
                    <div key={index} className="flex-shrink-0 w-full text-center">
                        {slide}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Banner;
