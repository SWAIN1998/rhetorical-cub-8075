import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import styles from './slider.module.css';

// import required modules
import { Pagination, Navigation } from 'swiper';
import { Img } from '@chakra-ui/react';

export default function Slider({ arr }) {
  return (
    <>
      <Swiper
        breakpoints={{
          576: {
            // width: 576,
            slidesPerView: 1,
          },
          850: {
            // width: 768,
            slidesPerView: 2,
          },
          1400: {
            // width: 768,
            slidesPerView: 3,
          },
        }}
        centeredSlides={true}
        spaceBetween={-400}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className='mySwiper'
        id='multiImageSlider'>
        {arr.map((elm, index) => (
          <SwiperSlide key={index}>
            <Img mb={'10'} className={styles.Mimage} src={elm} alt='multipleImages' />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
