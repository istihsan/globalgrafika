import React, { useState } from "react";
import HeroProduct from "./components/heroProduct";
import Footer from "./components/footer"
import ProductsBrochure from "./components/productsBrochure";
import ProductsFeature from "./components/productsFeatures";
// import ProductsPage from "../productsPage";

const Products = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <>
    <HeroProduct />
    <ProductsFeature/>
    <ProductsBrochure />
    {/* <ProductsPage /> */}
    <Footer />
    </>
  );
};

export default Products;