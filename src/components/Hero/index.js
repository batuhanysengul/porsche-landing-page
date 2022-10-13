import React, { useState } from "react";
import "./style.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Hero = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className="hero-section" 
    style={{
        backgroundColor: slides[current].bgColor 
      }}>
      <div className="hero-wrapper">
        {slides.map((slide, index) => {
          return (
            <div className="hero-slide" key={index}>
              {index === current && (
                <div className="hero-slider">
                  <img src={slide.image} alt={slide.alt}  className="hero-img"  />
                  <div className="hero-content">
                    <h1>{slide.title}</h1>
                    <h3>{slide.price}</h3>
                    <p>{slide.about}</p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
        <div className="slider-buttons">
          <FaArrowLeft onClick={prevSlide} />
          <FaArrowRight onClick={nextSlide} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
