import React, { Fragment, useEffect } from "react";
import { CgMouse } from "react-icons/all";
import "./Home.css";
import ProductCard from "./ProductCard.js";
import MetaData from "../layout/MetaData";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";
import axios from "axios";
import Product from "./Product.js";

const product={
_id:"643300a9dedb2a3a3f983656",
name:"Tshirt",
 images:["https://images.pexels.com/photos/16383969/pexels-photo-16383969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
"https://images.pexels.com/photos/16383969/pexels-photo-16383969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
 "https://images.pexels.com/photos/16383969/pexels-photo-16383969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"],
 price:"400$",
 numOfReviews:"256"
}






const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error,products} = useSelector((state) => state.products);


  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);


  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="ReuseU" />

          <div className="banner">
            <p>Welcome To ReuseU  Ecommerce stire</p>
            <h1>FIND AMAZING PRODUCTS BELOW</h1>

            <a href="#container">
              <button>
                Scroll <CgMouse />
              </button>
            </a>
          </div>

          <h2 className="homeHeading">Featured Products</h2>



          <div className="container" id="container">
            
<Product product={product}/>
<Product product={product}/>
<Product product={product}/>
<Product product={product}/>
<Product product={product}/>
<Product product={product}/>
<Product product={product}/>

          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
