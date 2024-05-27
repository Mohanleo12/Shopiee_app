import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "product",
  initialState: {
    loading: false,
    list: [],
    error: "",
  },
  reducers: {
    fetchProducts(state) {
      state.loading = true;
    },
    fetchProductError(state, action) {
      state.loading = false;
      state.error = action.payload || "Oops..seomething went wrong";
    },
    updateeAllProducts(state, action) {
      state.loading = false;
      state.list = action.payload;
      state.error = "";
    },
  },
});

export const { updateeAllProducts, fetchProducts, fetchProductError } =
  slice.actions;
export default slice.reducer;
