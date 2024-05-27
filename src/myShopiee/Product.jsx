import { useDispatch } from "react-redux";
import {
  addCartItem,
  removeCartItem,
} from "../myShopiee/myStore/slices/CartSlice";
import { addWishListItem } from "../myShopiee/myStore/slices/WishListSlice";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Product({
  productId,
  title,
  rating,
  price,
  imageUrl,
  stock,
  discountPrice,
  items,
}) {
  const dispatch = useDispatch();
  const itemPrice = Math.round(price).toLocaleString();

  const handleOnAddCart = () => {
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
  };
  const handleOnAddWishList = () => {
    dispatch(
      addWishListItem({
        productId,
        title,
        rating,
        price,
        imageUrl,
        stock,
        discountPrice,
      })
    );
  };
  return (
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
          <b>Price:</b> $ {itemPrice}
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
        <button onClick={handleOnAddCart}>Add to Cart</button>
        <button onClick={handleOnAddWishList}>Add to Wishlist</button>
      </div>
      <Link
        to={`/buy-now?id=${productId}`}
        style={{ textDecoration: 0 }}>
        <div className='buy-btn'>
          <button>Buy Now</button>
        </div>
      </Link>
    </div>
  );
}
