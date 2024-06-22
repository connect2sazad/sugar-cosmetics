
import { FaHeart, FaStar } from 'react-icons/fa';

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

  export default ProductCard;