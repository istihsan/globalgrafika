import React, { useState } from "react";
import HeroProduct from "./components/heroProduct";
import Footer from "./components/footer"
import ProductCard from "./components/productcard"
import FrequentlyAskedQuestion from "./components/frequentlyaskedquestions";
import ProductCardH from "./components/productcardh";
import CarouselBrochure from "./components/carouselBrochure";
import ProductsBrochure from "./components/productsBrochure";
import ProductsFeature from "./components/productsFeatures";

const Products = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <>
    <HeroProduct />
    <ProductsFeature/>
    <ProductsBrochure />
    <Footer />
    </>
  );
};

export default Products;