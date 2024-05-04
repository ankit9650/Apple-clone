import React, { useState } from 'react';
const Carousel = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="relative">
      <div className="overflow-hidden w-full relative">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <img src={image} alt={`Slide ${index}`} className="w-full" />
            </div>
          ))}
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 flex justify-center mb-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 mx-2 rounded-full bg-gray-500 ${
              index === currentSlide ? 'bg-gray-900' : ''
            }`}
          ></button>
        ))}
      </div>
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 px-4 py-2 bg-gray-900 text-white rounded-full"
        onClick={prevSlide}
      >
        Prev
      </button>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 px-4 py-2 bg-gray-900 text-white rounded-full"
        onClick={nextSlide}
      >
        Next
      </button>
    </div>
  );
};

export default Carousel;