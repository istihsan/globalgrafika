import React from "react";
import Footer from "../../common/footer";
import ProductCarousel from "./carouselProduct";
import ProductDescription from "./productDescription";

const ProductDetail = () => {
  return (
    <>
      <ProductDescription />
      <ProductCarousel />
      <Footer />
    </>
  );
};

export default ProductDetail;
