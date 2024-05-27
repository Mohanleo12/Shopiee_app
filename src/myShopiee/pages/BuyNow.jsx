import { CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import { FaPercentage } from "react-icons/fa";
import Box from "@mui/material/Box";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const BuyNow = () => {
  const productName = new URLSearchParams(window.location.search).get("id");
  const [isLoading, setIsLoading] = useState(null);
  const [productData, setProductData] = useState([]);
  const [notFound, setNotFound] = useState(false);

  function CircularIndeterminate() {
    return (
      <Box sx={{ display: "flex" }}>
        <CircularProgress />
      </Box>
    );
  }

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${productName}`)
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(data);
        setProductData({
          thumbnail: data.thumbnail,
          title: data.title,
          brand: data.brand,
          description: data.description,
          rating: data.rating,
          stock: data.stock,
          price: data.price,
          discountPercentage: data.discountPercentage,
        });
      })
      .catch((err) => {
        setNotFound(true);
      });
  }, [setProductData]);

  let originalPrice = Math.round(productData.price * 83.4).toLocaleString();
  const discount = Math.round(
    (productData.discountPercentage / 100) * (productData.price * 83.4)
  );
  const dealPrice = Math.round(
    productData.price * 83.4 - discount
  ).toLocaleString(); //toLocaleString used to convert the number with commas

  if (notFound) {
    return <div> product not Found</div>;
  }

  return !isLoading ? (
    <h2 className='loading-msg'>
      {" "}
      {CircularIndeterminate()}
      Loading..please wait
    </h2>
  ) : (
    <main>
      <div className='back-btn'>
        <Link
          style={{ textDecoration: 0, color: "black" }}
          to='/'>
          <h5>
            <IoArrowBackCircleSharp /> Back
          </h5>
        </Link>
      </div>
      <div className='products'>
        <div className='image-product'>
          <img
            src={productData.thumbnail}
            alt='thumbnail'
            className='thumbnail'
          />
        </div>
        <div className='product-details'>
          <h2> {productData.title} </h2>
          <b style={{ fontStyle: "italic" }}> {productData.brand}</b>
          <p> {productData.description} </p>
          <p>Reivew & Ratings: {productData.rating} / 5 ⭐ </p>
          <p>Original Price: ₹ {originalPrice} </p>
          <p style={{ color: "violet", fontWeight: 700 }}>
            Get <b>{productData.discountPercentage}</b> <FaPercentage /> OFF{" "}
          </p>
          <p className='offer'>
            Exclusive Offer Hurry up!! Only <b>{productData.stock}</b> items are
            left
          </p>
          <h3 className='deal-price'>
            Deal Price: <b style={{ fontSize: 30 }}> ₹ {dealPrice} </b>{" "}
          </h3>
          <button className='placeOrder-btn'>Place Order</button>
        </div>
      </div>
    </main>
  );
};

export default BuyNow;
