import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RiChatHeartFill } from "react-icons/ri";
import { FaShoppingCart } from "react-icons/fa";

export default function Header() {
  const cartItems = useSelector((state) => state.cartItems);
  const wishList = useSelector((state) => state.wishList);
  return (
    <header>
      <div className='header-contents'>
        <div className='title-name'>
          <h2>
            <Link
              className=''
              to='/'
              style={{
                color: "black",
                textDecoration: 0,
                fontStyle: "italic",
              }}>
              Shopiee
            </Link>
          </h2>
        </div>

        <div className='cart-and-wishlist'>
          <Link
            className='cart-icon'
            to='/wishList'>
            <div className='cart-items-count'>
              {wishList.reduce(
                (accumulator, currentItem) =>
                  accumulator + currentItem.quantity,
                0
              )}{" "}
            </div>
            <RiChatHeartFill style={{ color: "black" }} />
            <p>WishList</p>
          </Link>
          <Link
            className='cart-icon'
            to='/cart'>
            <div className='cart-items-count'>
              {cartItems.reduce(
                (accumulator, currentItem) =>
                  accumulator + currentItem.quantity,
                0
              )}{" "}
            </div>
            <FaShoppingCart style={{ color: "black" }} />
            <p>Cart</p>
          </Link>
        </div>
      </div>
    </header>
  );
}
