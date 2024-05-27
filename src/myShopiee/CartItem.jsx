import React from "react";
import { useDispatch } from "react-redux";
import {
  decreaseCartItemQuantity,
  increaseCartItemQuantity,
  removeCartItem,
} from "../myShopiee/myStore/slices/CartSlice";
import { FaPlus } from "react-icons/fa";
import { HiMinusSm } from "react-icons/hi";
import { MdDeleteOutline } from "react-icons/md";
import { Link } from "react-router-dom";

export default function CartItem({
  productId,
  title,
  stock,
  price,
  imageUrl,
  quantity,
  rating,
}) {
  const dispatch = useDispatch();
  return (
    <div className='cart-item-container'>
      <div className='cart-item'>
        <img
          src={imageUrl}
          alt={title}
        />
        <div className='cart-item-content'>
          <h4>{title}</h4>
          <p style={{ color: "red", margin: 0 }}>
            Hurry!! Only <b>{stock}</b> items left
          </p>
          <p className='rating'> Rating: {rating} ⭐ </p>
        </div>
        <div className='cart-buy'>
          <Link
            to={`/buy-now?id=${productId}`}
            style={{ textDecoration: 0 }}>
            <div className='buy-btn-cart'>
              <button>Buy now</button>
            </div>
          </Link>{" "}
        </div>
      </div>
      <div className='item-price'>${price.toLocaleString()}</div>
      <div className='item-quantity'>
        <HiMinusSm
          className='plus-minus-btn'
          onClick={() =>
            dispatch(decreaseCartItemQuantity({ productId }))
          }></HiMinusSm>
        <span>{quantity}</span>
        <FaPlus
          className='plus-minus-btn'
          onClick={() =>
            dispatch(increaseCartItemQuantity({ productId }))
          }></FaPlus>
        <MdDeleteOutline
          className='remove-btn'
          onClick={() => {
            dispatch(removeCartItem({ productId }));
          }}></MdDeleteOutline>
      </div>
      <div className='item-total'>$ {(quantity * price).toLocaleString()}</div>
    </div>
  );
}
