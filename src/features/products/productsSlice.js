import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  wishlistProducts: localStorage.getItem("wishlist")
    ? JSON.parse(localStorage.getItem("wishlist"))
    : [],
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    pushProducts: (state, action) => {
      state.products.push(...action.payload);
    },
    addToWishlist: (state, action) => {
      const newProduct = action.payload;
      const existingProduct = state.wishlistProducts.find(
        (product) => product.id === newProduct.id
      );
      const wishList = existingProduct
        ? state.wishlistProducts.map((product) =>
            product.id === existingProduct.id ? newProduct : product
          )
        : [...state.wishlistProducts, newProduct];
      state.wishlistProducts = [...wishList];
      localStorage.setItem("wishlist", JSON.stringify(state.wishlistProducts));
    },
    removeFromWishlist: (state, action) => {
      const newProduct = action.payload;
      const wishlistedProducts = state.wishlistProducts.filter(
        (product) => newProduct.id !== product.id
      );
      state.wishlistProducts = [...wishlistedProducts];
      localStorage.setItem("wishlist", JSON.stringify(state.wishlistProducts));
    },
  },
});

export const { pushProducts, addToWishlist, removeFromWishlist } =
  productsSlice.actions;

export default productsSlice.reducer;
