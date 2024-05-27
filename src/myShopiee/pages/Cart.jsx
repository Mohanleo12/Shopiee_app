import React, { useEffect, useState } from "react";
import CartItem from "../CartItem";
import { useSelector } from "react-redux";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

// const cartStroage = JSON.parse(localStorage.getItem("cart")) || [];
export default function Cart() {
  const cartItems = useSelector((state) => state.cartItems);
  // const [cart, setCart] = useState(cartStroage);
  const finalAmount = cartItems
    .reduce(
      (accumulator, currentItem) =>
        accumulator + currentItem.quantity * currentItem.price,
      0
    )
    .toLocaleString();

  // useEffect(() => {
  //   localStorage.setItem("cart", JSON.stringify(cartItems));
  //   setCart(cartItems);
  // }, [cartItems]);
  // console.log(cart);
  return (
    <div className='cart-container'>
      <div className='back-btn'>
        <Link
          style={{ textDecoration: 0, color: "black" }}
          to='/'>
          <h5>
            <IoArrowBackCircleSharp /> Back
          </h5>
        </Link>
      </div>
      <h2>Items in your Cart</h2>
      <div className='cart-items-container'>
        <div className='cart-header cart-item-container'>
          <div className='cart-item'>Item</div>
          <div className='item-price'>Price</div>
          <div className='quantity'>Quantity</div>
          <div className='total'>Total</div>
        </div>
        {cartItems.map(
          ({ productId, title, rating, price, imageUrl, quantity, stock }) => (
            <CartItem
              key={productId}
              productId={productId}
              title={title}
              price={price}
              stock={stock}
              quantity={quantity}
              imageUrl={imageUrl}
              rating={rating}
            />
          )
        )}
        <div className='cart-header cart-item-container'>
          <div></div>
          <div></div>
          <div></div>
          <div className='total'>${finalAmount}</div>
        </div>
      </div>
    </div>
  );
}
