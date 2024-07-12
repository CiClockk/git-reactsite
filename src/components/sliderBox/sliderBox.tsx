import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { showNextSlide, showPreviousSlide } from '../../store/store';
import Slider from '../sliderElement/sliderElement';

const SliderBox: React.FC = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(showNextSlide());
    }, 3000);

    return () => clearInterval(interval);
  }, [dispatch]);

  return (
    <div className='block-slider'>
      <Slider />
    </div>
  );
};

export default SliderBox;