import React from "react";
import WishListItem from "../WishListItem";
import { useSelector } from "react-redux";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const WishList = () => {
  const wishList = useSelector((state) => state.wishList);
  return (
    <>
      <div className='back-btn'>
        <Link
          style={{ textDecoration: 0, color: "black" }}
          to='/'>
          <h5>
            <IoArrowBackCircleSharp /> Back
          </h5>
        </Link>
      </div>
      <div className='wishList-heading'>
        <h3>Items added to your wishList</h3>
      </div>
      <hr />
      <div className='products-container'>
        {wishList.map(
          ({
            productId,
            title,
            rating,
            price,
            imageUrl,
            quantity,
            stock,
            discountPrice,
          }) => (
            <WishListItem
              key={productId}
              productId={productId}
              title={title}
              price={price}
              quantity={quantity}
              imageUrl={imageUrl}
              stock={stock}
              rating={rating}
              discountPrice={discountPrice}
            />
          )
        )}
      </div>
    </>
  );
};

export default WishList;
