
import { FaHeart, FaStar } from 'react-icons/fa';

const ProductCard = ({ product }) => {
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img src={product.display_image} className="card-img-top" alt="Lip Gloss" />
        <div className="card-body">
          <h6 className="card-title text-center">{product.product_name}</h6>
          <p className="text-muted text-center">{product.display_text}</p>
          <h3 className="card-title text-center">₹{product.offer_price}</h3>
          <p className="text-muted text-center text"><del>₹{product.full_price}</del></p>
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

export default ProductCard;