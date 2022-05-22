import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Wishlist from "./components/Wishlist";

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
