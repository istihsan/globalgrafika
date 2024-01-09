import React from "react";
import HeroProduct from "./components/aboutUs/heroAboutUs";
import Footer from "./components/common/footer";
import ProductsBrochure from "./components/aboutUs/productsBrochure";
import WhyUs from "./components/aboutUs/whyUs";
import ProductsPage from "./ProductsPage";
import { Divider, VStack } from "@chakra-ui/react";

const AboutUs = () => {
  return (
    <VStack
      direction="column"
      align="center"
      justify="center"
      minH="100vh"
      bgGradient={"radial(#6497b1 10%, #b3cde0, #FFFFFF)"}
    >
      <HeroProduct />
      <Divider maxW={"80%"} />
      <WhyUs />
      <Divider maxW={"80%"} />
      <ProductsBrochure />
      <ProductsPage />
      <Footer />
    </VStack>
  );
};

export default AboutUs;
