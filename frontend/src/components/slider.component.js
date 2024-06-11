// import Swiper core and required modules
import { Navigation, A11y, EffectFade } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade'; 

import { SliderImages } from '../assets/images';

const Slider = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, A11y, EffectFade]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      effect={'fade'}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      loop={true}
    >
      {/* <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide> */}
      {
        SliderImages.map((image, index) => {
            return(
                <SwiperSlide key={index}>
                    <img src={image} alt="" srcset="" />
                </SwiperSlide>
            );
        })
      }
    </Swiper>
  );
};

export default Slider;