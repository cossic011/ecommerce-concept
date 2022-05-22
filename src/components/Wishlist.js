import React from "react";
import { useSelector } from "react-redux";
import Product from "./Product";

const Wishlist = () => {
  const { wishlistProducts } = useSelector((state) => state.products);
  return (
    <div className="p-6 flex flex-wrap gap-14 justify-center">
      {wishlistProducts.length === 0 && (
        <h1 className="text-semibold text-gray-700 text-xl">
          No Wishlisted Products :)
        </h1>
      )}
      {wishlistProducts.map((product) => (
        <Product key={product.id} product={product} wishlistPage={true} />
      ))}
    </div>
  );
};

export default Wishlist;
