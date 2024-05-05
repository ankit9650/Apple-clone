import React, { useState, useEffect } from "react";

const slides = [
  {
    image: "https://www.apple.com/v/iphone-15-pro/c/images/meta/iphone-15-pro_overview__f8jz7aagka2q_og.png",
    text: "iPhone 15 Pro",
    explain:"Titanium. So strong. So light. So pro. "
  },
  {
    image: "https://www.apple.com/v/macbook-pro-13/p/images/overview/hero_endframe__bsza6x4fldiq_large_2x.jpg",
    text: "  MacBook Pro ",
    explain:" With M3, M3 Pro or M3 Max chip "
  },
  {
    image: "https://www.apple.com/newsroom/images/2023/09/apple-introduces-the-advanced-new-apple-watch-series-9/tile/Apple-Watch-S9-hero-230912.jpg.landing-big_2x.jpg",
    text: "Introducing Apple Watch",
    explain:"Series 9 Smarter. Brighter. Mighter"
  },
];

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative">
    <div className="overflow-hidden">
      <div className="flex">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`w-full flex-shrink-0 ${
              index === currentSlide ? "" : "hidden"
            }`}
          >
            <img src={slide.image} alt={`Slide ${index}`} className="w-full" />
            <div className="absolute text-3xl font-sans text-center font-bold left-33 top-3/4  text-white py-2 px-4">
              {slide.text}<br /> {slide.explain}
            </div>
            
          </div>
        ))}
      </div>
    </div>
    <div className="absolute inset-x-0 bottom-0 flex justify-center">
      {slides.map((_, index) => (
        <button
          key={index}
          onClick={() => goToSlide(index)}
          className={`w-4 h-4 bg-gray-500 rounded-full mx-2 focus:outline-none ${
            index === currentSlide ? "bg-gray-900" : ""
          }`}
        />
      ))}
    </div>
  </div>
);
};

export default Carousel;