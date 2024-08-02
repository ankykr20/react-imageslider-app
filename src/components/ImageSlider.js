import React, { useState, useEffect } from "react";
import "./ImageSlider.css";

const ImageSlider = ({ images, interval }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(intervalId);
  }, [interval, images.length]);

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleClickIndicator = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="image-slider">
      <div className="slider-container">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className={`slider-image ${currentImageIndex === index ? "active" : ""}`}
          />
        ))}
      </div>

    {/* Left and right navigation button */}
      <div className="slider-navigation">
        <button className="navigation-button prev" onClick={handlePrev}>
        &lt;
        </button>
        <button className="navigation-button next" onClick={handleNext}>
          &gt;
        </button>
      </div>

    {/* Indicators */}
      <div className="indicator-dots">
        {images.map((_, index) => (
          <div
            key={index}
            className={`indicator-dot ${currentImageIndex === index ? "active" : ""}`}
            onClick={() => handleClickIndicator(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;