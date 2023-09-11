import React, { useState } from "react";
import heroImage from "../logo.svg";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Footer from "./components/footer"
import ProductCard from "./components/productcard"
import FrequentlyAskedQuestion from "./components/frequentlyaskedquestions";
import { AbsoluteCenter } from "@chakra-ui/react";

const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <>
    <Navbar/>
    <Hero />
    <ProductCard /> 
    <FrequentlyAskedQuestion />
    <Footer />
    </>
  );
};

export default Home;