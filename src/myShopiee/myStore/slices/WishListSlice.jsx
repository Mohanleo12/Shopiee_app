import { createSlice } from "@reduxjs/toolkit";

const findItemIndex = (state, action) =>
  state.findIndex(
    (wishListItem) => wishListItem.productId === action.payload.productId
  );

const slice = createSlice({
  name: "wishList",
  initialState: [],
  reducers: {
    addWishListItem(state, action) {
      const existingItemIndex = findItemIndex(state, action);
      if (existingItemIndex !== -1) alert("You have alredy added this item");
      else state.push({ ...action.payload, quantity: 1 });
    },
    removeWishListItem(state, action) {
      const existingItemIndex = findItemIndex(state, action);
      state.splice(existingItemIndex, 1);
    },
  },
});

export const { addWishListItem, removeWishListItem } = slice.actions;
export default slice.reducer;

// // Action Types
// const WISHLIST_ADD_ITEM = "wishList/addItem";
// const WISHLIST_REMOVE_ITEM = "wishList/removeItem";

// // Action Creators
// export function addWishListItem(productId) {
//   return { type: WISHLIST_ADD_ITEM, payload: { productId } };
// }
// export function removeWishListItem(productId) {
//   return { type: WISHLIST_REMOVE_ITEM, payload: { productId } };
// }

// // Reducer
// export default function wishListReducer(state = [], action) {
//   switch (action.type) {
//     case WISHLIST_ADD_ITEM:
//       return [...state, action.payload];

//     case WISHLIST_REMOVE_ITEM:
//       return state.filter(
//         (wishListItem) => wishListItem.productId !== action.payload.productId
//       );
//     default:
//       return state;
//   }
// }
