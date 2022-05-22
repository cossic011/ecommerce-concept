import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex items-center bg-blue-200 text-gray-800 font-semibold py-5 justify-between px-5">
      <div>
        <Link
          to="/"
          className="text-xl cursor-pointer transition-all hover:text-gray-900 hover:underline-offset-1 hover:underline"
        >
          WebShop Concept Logo
        </Link>
      </div>
      <div>
        <Link
          to="/wishlist"
          className="text-xl cursor-pointer transition-all  hover:text-gray-900 hover:underline-offset-1 hover:underline"
        >
          Wishlist
        </Link>
      </div>
    </div>
  );
};

export default Header;
