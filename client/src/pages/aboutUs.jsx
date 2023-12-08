import React from 'react';
import HeroProduct from './components/heroProduct';
import Footer from './components/footer';
import ProductsBrochure from './components/productsBrochure';
import WhyUs from './components/whyUs';
import ProductsPage from './ProductsPage';
import { Divider, VStack } from '@chakra-ui/react';

const AboutUs = () => {
  return (
    <VStack
      direction="column"
      align="center"
      justify="center"
      minH="100vh"
      bgGradient={'radial(#6497b1 10%, #b3cde0, #FFFFFF)'}
    >
      <HeroProduct  />
      <WhyUs/>
      <Divider maxW={"80%"}/>
      <ProductsBrochure/>
      <ProductsPage/>
      <Footer/>
    </VStack>
  );
};

export default AboutUs;
