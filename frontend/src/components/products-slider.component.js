// import Swiper core
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import ProductCard from './product-card.component';

const ProductsSlider = ({ heading, background = "", products }) => {

  const text_white = background !== "" ? "text-white" : "";

  return (
    <div className={`container-fluid px-4 my-5 pb-5 ${background}`}>
      <div className={`seprated-heading pt-5 my-5 ${text_white}`}>{heading}</div>
      <Swiper
        spaceBetween={50}
        slidesPerView={4}
        loop={true}
        modules={[Navigation]}
        navigation
      >
        {
          products.map(product => {
            return (
              <SwiperSlide key={product.id}>
                <ProductCard product={product} />
              </SwiperSlide>
            );
          })
        }
      </Swiper>
    </div>
  );
};

export default ProductsSlider;

