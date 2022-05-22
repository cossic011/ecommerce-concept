import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToWishlist,
  removeFromWishlist,
} from "../features/products/productsSlice";

const Product = ({ product, wishlistPage }) => {
  const { wishlistProducts } = useSelector((state) => state.products);

  const wishlistedProduct = wishlistProducts.find(
    (singleProduct) => singleProduct.id === product.id
  );

  const dispatch = useDispatch();
  return (
    <div
      className="flex flex-col justify-center space-y-4 h-[480px] w-[260px] rounded-xl"
      style={{ boxShadow: "3px 3px 10px rgba(0,0,0,.4)" }}
    >
      <div className="p-4 flex justify-center">
        <img className="h-[250px] object-contain" src={product.image} />
      </div>
      <div className="p-4 h-[230px] flex flex-col items-center justify-between text-center">
        <div className="flex flex-col justify-evenly items-center h-[100px]">
          <h2 className="text-gray-500">{product.title}</h2>
          <span className="text-blue-700 font-semibold">
            {product.price} BAM
          </span>
        </div>
        {!wishlistPage &&
          (wishlistedProduct !== undefined ? (
            <button
              onClick={() => dispatch(removeFromWishlist(product))}
              className="bg-blue-500 text-white w-full py-1 hover:bg-blue-700 transition-all"
            >
              Remove From Wishlist
            </button>
          ) : (
            <button
              onClick={() => dispatch(addToWishlist(product))}
              className="bg-blue-500 text-white w-full py-1 hover:bg-blue-700 transition-all"
            >
              Add To Wishlist
            </button>
          ))}
      </div>
    </div>
  );
};

export default Product;
