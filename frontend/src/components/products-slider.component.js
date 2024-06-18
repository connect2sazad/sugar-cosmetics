// import Swiper core
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaHeart, FaStar } from 'react-icons/fa';

// Import Swiper styles
import 'swiper/css';
import { Navigation } from 'swiper/modules';

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

const ProductCard = ({ product }) => {
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img src={product.displayimage} className="card-img-top" alt="Lip Gloss" />
        <div className="card-body">
          <h6 className="card-title text-center">{product.productname}</h6>
          <p className="text-muted text-center">{product.displaytext}</p>
          <h3 className="card-title text-center">₹{product.offerprice}</h3>
          <p className="text-muted text-center text"><del>₹{product.fullprice}</del></p>
          <p className="text-muted text-center text"><span className="text-warning"><FaStar />&nbsp;</span>5.0 (1)</p>
          <div className="row">
            <div className="col-1"></div>
            <div className="col-2">
              <button className="btn btn-dark"><FaHeart /></button>
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