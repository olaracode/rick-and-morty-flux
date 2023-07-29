import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Card from "./Card.jsx";
const ProductList = () => {
  const { store } = useContext(Context);
  return (
    <div>
      {store.products.map((product) => {
        return (
          <Card
            title={product.name}
            subtitle={product.status}
            id={product.id}
          />
        );
      })}
    </div>
  );
};

export default ProductList;
