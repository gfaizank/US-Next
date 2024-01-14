import { useState, useEffect } from 'react';

const images = [
  'assets/adCarousel-1.jpeg',
  'assets/adCarousel-2.jpeg',
  'assets/adCarousel-3.jpeg',
];

const AdCarousel = () => {
    const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []); 

  return (
    <div className="max-w-md mx-4 my-5 h-20 overflow-hidden rounded-md shadow-lg border relative">
      <div className="flex transition-transform duration-1000 ease-in-out transform -translate-x-full"
        style={{
          transform: `translateX(-${currentImage * 100}%)`,
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0"
          >
            <img className="w-full" src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdCarousel;
