import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import Product from "./Product";
import { pushProducts } from "../features/products/productsSlice";

const Home = () => {
  const { products } = useSelector((state) => state.products);

  const [isLoading, setIsLoading] = useState(false);
  const [limit, setLimit] = useState(8);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      const { data } = await axios.get(`https://fakestoreapi.com/products`);
      dispatch(pushProducts(data));
      setIsLoading(false);
    };
    fetchProducts();
  }, [dispatch]);

  const handleClick = () => {
    setLimit((prev) => (limit > 20 ? setLimit(20) : prev + 8));
  };

  return (
    <div className="p-6 flex flex-wrap gap-14 justify-center">
      {products.slice(0, limit).map((product, index) => (
        <Product product={product} key={product.id} wishlistPage={false} />
      ))}
      {!isLoading ? (
        <button
          onClick={handleClick}
          className={`bg-blue-500 text-white font-semibold py-2 px-5 ${
            limit > 20 && "hidden"
          }`}
        >
          Load More
        </button>
      ) : (
        <h2 className="text-blue-700 font-semibold text-xl">Loading...</h2>
      )}
    </div>
  );
};

export default Home;
