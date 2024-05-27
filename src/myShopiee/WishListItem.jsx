import React from "react";
import { useDispatch } from "react-redux";
import { removeWishListItem } from "./myStore/slices/WishListSlice";
import { Link } from "react-router-dom";
import { addCartItem } from "./myStore/slices/CartSlice";

export default function WishListItem({
  productId,
  title,
  rating,
  price,
  imageUrl,
  stock,
  discountPrice,
}) {
  const dispatch = useDispatch();
  return (
    <>
      <div className='product'>
        <div className='product-image'>
          <img
            src={imageUrl}
            alt={title}
          />
        </div>
        <div className='title-container'>
          <h3 style={{ fontWeight: 700 }}>{title}</h3>
        </div>
        <div className='price-rating-container'>
          <p className='rating'> Rating: {rating} ⭐ </p>
          <p style={{ color: "red" }}>
            Available in Stock: <b>{stock}</b> only
          </p>
          <p
            className='price'
            style={{ color: "green" }}>
            {" "}
            <b>Price:</b> $ {Math.round(price)}
          </p>
          <p
            style={{
              fontSize: 15,
              marginBottom: 5,
              color: "yellowgreen",
              fontWeight: 500,
            }}>
            {" "}
            Get this item on <b>{discountPrice}%</b> OFF
          </p>
        </div>
        <div className='cta-container'>
          <button
            onClick={() => {
              dispatch(
                addCartItem({
                  productId,
                  title,
                  rating,
                  price,
                  imageUrl,
                  stock,
                })
              );
            }}>
            Add to Cart
          </button>
          <button
            style={{ backgroundColor: "red", color: "white" }}
            onClick={() => {
              dispatch(removeWishListItem({ productId }));
            }}>
            Remove
          </button>
        </div>
        <Link
          to={`/buy-now?id=${productId}`}
          style={{ textDecoration: 0 }}>
          <div className='buy-btn-cart'>
            <button>Buy Now</button>
          </div>
        </Link>
      </div>
    </>
  );
}
