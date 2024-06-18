// import Swiper core
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import { ComboOffer } from '../assets/images';

const CombosSlider = ({ heading, background="" }) => {

  const text_white = background !== "" ? "text-white" : "";

  return (
    <div className={`container-fluid px-4 my-5 pb-5 ${background}`}>
      <div className={`seprated-heading pt-5 my-5 ${text_white}`}>{heading}</div>
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        loop={true}
        modules={[Navigation]}
        navigation
        centeredSlides={true}
      >
        <SwiperSlide>
          <ComboCard />
        </SwiperSlide>
        <SwiperSlide>
          <ComboCard />
        </SwiperSlide>
        <SwiperSlide>
          <ComboCard />
        </SwiperSlide>
        <SwiperSlide>
          <ComboCard />
        </SwiperSlide>
        <SwiperSlide>
          <ComboCard />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CombosSlider;

const ComboCard = () => {
  return (
    <>
      <div className="card">
        <img src={ComboOffer} className="card-img-top" alt="..." />
      </div>
    </>
  )
}