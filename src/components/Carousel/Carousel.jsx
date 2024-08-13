import React, { useState } from 'react';
import './styles.css';

const Carousel = ({ items, infinite }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const isPrevDisabled = isAnimating || (!infinite && currentIndex === 0);
  const isNextDisabled = isAnimating || (!infinite && currentIndex === items.length - 1);

  const goBack = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      if (infinite) {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
      } else {
        setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
      }
    }
  };

  const goFront = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      if (infinite) {
        setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
      } else {
        setCurrentIndex((prevIndex) => (prevIndex < items.length - 1 ? prevIndex + 1 : prevIndex));
      }
    }
  };

  const handleTransitionEnd = () => {
    setIsAnimating(false);
  };

  return (
    <div className="carousel-container">
      <div
        className="carousel-slide"
        onTransitionEnd={handleTransitionEnd}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="carousel-item"
          >
            <h2>{item.name}</h2>
          </div>
        ))}
      </div>
      <button
        className={`carousel-control prev ${isPrevDisabled ? 'disabled' : ''}`}
        onClick={goBack}
      >
        Back
      </button>
      <button
        className={`carousel-control next ${isNextDisabled ? 'disabled' : ''}`}
        onClick={goFront}
      >
        Next
      </button>
    </div>
  );
};

export default Carousel;