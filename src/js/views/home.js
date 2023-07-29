import React from "react"; // React, {}
import ProductList from "../component/ProductList.jsx";
import "../../styles/home.css";
export const Home = () => {
  return (
    <div className="text-center mt-5">
      <h1>Nuestros Productos</h1>

      <ProductList />
    </div>
  );
};
