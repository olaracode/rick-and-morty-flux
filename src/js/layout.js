import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
// import { Demo } from "./views/demo";
// import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import ProductView from "./views/ProductView.jsx";

// url param
// query param
// /valor_dinamico/details
// /product?nombre_variable=valor_variable
//create your first component
const Layout = () => {
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/view/:variable_name" element={<DynamicView />}/> */}
            <Route path="/product/:id" element={<ProductView />} />
            {/* 
            <Route path="/:username/:repository" element={<RepositoryView/>} /> */}
            {/* Con path="*" al final creamos una ruta de 404/Not FOund */}
            <Route path="*" element={<h1>Not found!</h1>} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
