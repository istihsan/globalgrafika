import React from "react";
import Hero from "./components/home/hero";
import Footer from "./components/common/footer";
import ProductCardHome from "./components/home/productCardHome";

const Home = () => {
  return (
    <>
      <Hero />
      <ProductCardHome />
      <Footer />
    </>
  );
};

export default Home;
