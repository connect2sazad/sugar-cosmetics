// import Swiper core
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaHeart, FaStar } from 'react-icons/fa';

// Import Swiper styles
import 'swiper/css';
import { Navigation } from 'swiper/modules';

const ProductsSlider = ({ heading, background="" }) => {

  const text_white = background !== "" ? "text-white" : "";

  return (
    <div className={`container-fluid px-4 my-5 pb-5 ${background}`}>
      <div class={`seprated-heading pt-5 my-5 ${text_white}`}>{heading}</div>
      <Swiper
        spaceBetween={50}
        slidesPerView={4}
        loop={true}
        modules={[Navigation]}
        navigation
      >
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ProductsSlider;

const ProductCard = () => {
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Ffiles%2F599125845-01.jpg%3Fv%3D1711208074&w=256&q=75" className="card-img-top" alt="..." />
        <div className="card-body">
          <h6 className="card-title text-center">SUGAR Play Mega Hype Colour Changing Lip Oil</h6>
          <p className="text-muted text-center">6 Shades</p>
          <h3 className="card-title text-center">₹479</h3>
          <p className="text-muted text-center text"><del>₹599</del></p>
          <p className="text-muted text-center text"><span className="text-warning"><FaStar/>&nbsp;</span>5.0 (1)</p>
          <div className="row">
            <div className="col-1"></div>
            <div className="col-2">
              <button className="btn btn-dark"><FaHeart/></button>
            </div>
            <div className="col-8">
              <button className="btn btn-secondary w-100">Add to Cart</button>
            </div>
            <div className="col-1"></div>
          </div>
        </div>
      </div>
    </>
  )
}