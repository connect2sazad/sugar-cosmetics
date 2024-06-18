// import Swiper core
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import { OfferImages } from '../assets/images';

const OfferSlider = ({ heading, background="" }) => {

  const text_white = background !== "" ? "text-white" : "";

  return (
    <div className={`container-fluid px-4 my-5 pb-5 ${background}`}>
      <div className={`seprated-heading pt-5 my-5 ${text_white}`}>{heading}</div>
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        loop={true}
        modules={[Navigation]}
        navigation
        centeredSlides={true}
      >
        {
          OfferImages.map((image, index) => {
            return (
              <SwiperSlide key={index}>
                <OfferBanner src={image} />
              </SwiperSlide>
            );
          })
        }
      </Swiper>
    </div>
  );
};

export default OfferSlider;

const OfferBanner = ({ src }) => {
  return (
    <>
      <div className="card">
        <img src={src} className="card-img-top" alt="..." />
      </div>
    </>
  )
}