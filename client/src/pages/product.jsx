import React from "react";
import HeroProduct from "./components/product/heroProduct";
import ProductCard from "./components/product/productCard";
import Footer from "./components/common/footer";

const Home = () => {
  return (
    <>
      <HeroProduct />
      <ProductCard />
      <Footer />
    </>
  );
};

export default Home;
