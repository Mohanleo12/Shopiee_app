import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "../Product";
import {
  fetchProductError,
  fetchProducts,
  updateeAllProducts,
} from "../myStore/slices/ProductSlice";
import { Input } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function Home() {
  const isLoading = useSelector((state) => state.products.loading);
  const error = useSelector((state) => state.products.error);
  const [fetchProductsData, setFetchProductsData] = useState([]);
  const [query, setQuery] = useState("");

  function CircularIndeterminate() {
    return (
      <Box sx={{ display: "flex" }}>
        <CircularProgress />
      </Box>
    );
  }
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        dispatch(updateeAllProducts(data));
        setFetchProductsData(data.products);
      })
      .catch(() => {
        dispatch(fetchProductError());
      });
  }, [setFetchProductsData]);
  return isLoading ? (
    <h2 className='loading-msg'>
      {" "}
      {CircularIndeterminate()}
      Loading..please wait
    </h2>
  ) : error ? (
    <h2 style={{ textAlign: "center" }}>{error}</h2>
  ) : (
    <>
      <div className='input-box'>
        <b>Search: </b>
        <Input
          type='search'
          className='Serch-input'
          placeholder='Search the products'
          onChange={(e) => {
            setQuery(e.target.value.toLowerCase());
          }}
        />
      </div>
      <div className='products-container'>
        {Array.isArray(fetchProductsData) &&
          fetchProductsData
            .filter((items) => items.title.toLowerCase().includes(query))
            .map((items) => (
              <Product
                items={items}
                key={items.id}
                productId={items.id}
                title={items.title}
                rating={items.rating}
                price={items.price}
                imageUrl={items.thumbnail}
                stock={items.stock}
                discountPrice={items.discountPercentage}
              />
            ))}
      </div>
    </>
  );
}
