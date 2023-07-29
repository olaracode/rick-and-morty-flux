const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      products: [], // Valor inicial del store.products
    },
    actions: {
      // Use getActions to call a function within a fuction
      loadProductData: async () => {
        // busca los productos en la api
        const response = await fetch(
          "https://rickandmortyapi.com/api/character"
        );

        // traduce a json el resultado
        const data = await response.json();

        // guarda los datos en nuestro store.products
        setStore({ products: data.results });
      },
    },
  };
};

export default getState;
