import { combineReducers, createStore } from "redux";
import productsReducer from "./slices/ProductSlice";
import cartReducer from "./slices/CartSlice";
import wishListReducer from "./slices/WishListSlice";
import { produce } from "immer";
import { configureStore } from "@reduxjs/toolkit";
// import { logger } from "./middleware/middleware";

//here below code by using redux-toolkit
export const store = configureStore({
  reducer: {
    products: productsReducer,
    cartItems: cartReducer,
    wishList: wishListReducer,
  },
  // middleware: () => [logger],
});

// Here below code using the redux

// const reducer = combineReducers({
//   products: productsReducer,
//   cartItems: cartReducer,
//   wishList: wishListReducer,
// });

// export const store = createStore(
//   reducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__?.()
// );

//produce example
// const users = [
//   {
//     name: "Anurag",
//     age: 26,
//   },
//   {
//     name: "Ram",
//     age: 18,
//   },
//   {
//     name: "Adarsh",
//     age: 16,
//   },
// ];

//mutating process
// users[1].age = 30
// console.log(users);

// now by produce method
// const allUsers = produce(users, (userCopy) => {
//   userCopy[1].age = 30;
// });
// console.log(allUsers);

//produce method will make a copy a return new array
