import React, {useState, useEffect} from 'react';

export default function Carousel({images}) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            // Increment the index to show the next image
            setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
        }, 3000); // Change the interval (in milliseconds) as needed

        return () => clearInterval(interval); // Cleanup on component unmount
    }, [currentIndex, images.length]);

    return (
        <div class="relative w-full h-96 overflow-hidden bg-gray-800">
            {images.map((image, index) => (
                <img
                    key={index}
                    src={image}
                    alt={`carousel-${index}`}
                    class={`absolute top-0 left-0 w-full h-full object-contain transition-transform ${
                        index === currentIndex ? 'opacity-100' : 'opacity-0'
                    } ${index === currentIndex ? 'scale-100' : 'scale-95'}`}
                />
            ))}
        </div>
    );
}
