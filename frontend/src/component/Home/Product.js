import React from 'react'
import Rating from "react-rating-stars-component"
import { Link } from "react-router-dom";




const Product = ({product}) => {
    const options = {
        value: product.ratings || 50,
        readOnly: true,
        precision: 0.5,
        isHalf:true,
    
      };


  return (
 <Link className="productCard" to={`/product/${product._id}`}>
  <img src={product.images[0]} alt={product.name}/>
  <p>{product.name}</p>
      <div>
        <Rating {...options} />{" "}
        <span className="productCardSpan">
          {" "}
          ({product.numOfReviews} product reviews)
        </span>
      </div>
      <span>{`₹${product.price}`}</span>
 </Link>
  );
}

export default Product