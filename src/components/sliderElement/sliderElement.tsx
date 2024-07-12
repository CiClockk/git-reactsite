import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
const Slider: React.FC = () => {
  const { slides, slideIndex } = useSelector((state: RootState) =>
    state.slider);
  return (
    <div className="slider">
      {slides.map((slide, index) => (
        <div key={index} className="slide-viewing" style={{
          display: index === slideIndex ? 'block' : 'none'
        }}>
          <div className="slider-content">
            <div className="slider-img">
              <img src={slide.img_src} alt={slide.img_alt}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Slider;