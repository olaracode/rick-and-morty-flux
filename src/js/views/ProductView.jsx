import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import DetailCard from "../component/DetailCard.jsx";
import { useNavigate } from "react-router-dom";

// export nombrado
// export const ProductView = () => {}
// import { ProductView } from "...."
const ProductView = () => {
  // Traemos nuestro store
  const { store } = useContext(Context);

  // Traemos los url params(Ruta dinamica)
  const params = useParams();

  // Instanciando el hook
  const navigate = useNavigate();

  // Local States
  // El producto actual
  const [productDetails, setProductDetails] = useState({});

  // Functions

  // Usa el params.id y el store para buscar el producto actual
  const findProductById = () => {
    const parsedId = parseInt(params.id);
    const currentProduct = store.products.find(
      (product) => product.id === parsedId
    );

    // si no se encuentra el producto te mande a 404
    if (!currentProduct) {
      navigate("/404");
    }
    // Se lo asigna a nuestro estado
    setProductDetails(currentProduct);
  };

  useEffect(() => {
    // Valida si la lista esta vacia
    if (store.products.length === 0) return; // termina la funcion

    // Busca el producto
    findProductById();

    // [store.products] -> arreglo de dependencias
  }, [store.products]); // store.products cambia se vuelve a ejecutar

  return (
    <div className="container d-flex justify-content-center align-items-center">
      <DetailCard img={productDetails.image} name={productDetails.name} />
    </div>
  );
};

export default ProductView;
