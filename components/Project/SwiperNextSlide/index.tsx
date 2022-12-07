import React from 'react';
import { useSwiper } from 'swiper/react';
import { SwiperChangeSlideProps } from '../../../interfaces';

const SwiperNextSlide: React.FC<SwiperChangeSlideProps> = ({ func, children }) => {
  const swiper = useSwiper();
  return (
    <button onClick={() => (func == 'next' ? swiper.slideNext() : swiper.slidePrev())}>
      {children}
    </button>
  );
};

export default SwiperNextSlide;
