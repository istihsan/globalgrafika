import {
  Flex,
  Box,
  Text,
  Image,
  chakra,
  Button,
  Link,
  Center
} from "@chakra-ui/react";
import { useState } from "react";

const ProductCarousel = () => {
  const arrowStyles = {
    cursor: "pointer",
    pos: "absolute",
    top: "50%",
    w: "auto",
    mt: "-3%",
    p: "16px",
    color: "black",
    fontWeight: "bold",
    fontSize: "18px",
    transition: "0.6s ease",
    borderRadius: "0 3px 3px 0",
    userSelect: "none",
    _hover: {
      opacity: 0.8,
      bg: "gray"
    }
  };
  const slides = [
    {
      title: "Digital Printing Small",
      img: "https://images.pexels.com/photos/7108127/pexels-photo-7108127.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      link: "/products/digitalprintingsmall"
    },
    {
      title: "Digital Printing Large",
      img: "https://images.pexels.com/photos/2422404/pexels-photo-2422404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      link: "/products/digitalprintinglarge"
    },
    {
      title: "Office Supplies And Stationery",
      img: "https://images.pexels.com/photos/4087394/pexels-photo-4087394.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      link: "/products/officesupplies"
    },
    {
      title: "Product Display & Merchandise",
      img: "https://images.pexels.com/photos/11966629/pexels-photo-11966629.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      link: "/products/merchandise"
    }
  ];
  const [currentSlide, setCurrentSlide] = useState(1);
  const slidesCount = slides.length;

  const prevSlide = () => {
    setCurrentSlide(s => (s === 0 ? slidesCount - 1 : s - 1));
  };

  const nextSlide = () => {
    setCurrentSlide(s => (s === slidesCount - 1 ? 0 : s + 1));
  };

  const carouselStyle = {
    transition: "all .5s",
    ml: `-${currentSlide * 100}%`
  };
  return (
    <Center overflow={"hidden"}>
      <Flex maxW="35%" p={10} alignItems="center" justifyContent="center">
        <Flex w="full" pos="relative">
          <Flex w="full" minH={"40vh"} {...carouselStyle}>
            {slides.map((slide, sid) => (
              <Box key={`slide-${sid}`} boxSize="full" flex="none">
                <Text
                  color="white"
                  fontSize="xs"
                  p="8px 12px"
                  pos="absolute"
                  top="0"
                >
                  {sid + 1} / {slidesCount}
                </Text>
                <Box
                  maxW="xs"
                  mx="auto"
                  bgGradient={`linear(to-t, #6497b1 , #b3cde0, #FFFFFF 100%)`}
                  shadow="lg"
                  rounded="lg"
                >
                  <Box px={4} py={2}>
                    <chakra.h1
                      color="gray.800"
                      _dark={{
                        color: "white"
                      }}
                      fontWeight="bold"
                      fontSize="3xl"
                      textTransform="uppercase"
                    >
                      {slide.title}
                    </chakra.h1>
                    <chakra.p
                      mt={1}
                      fontSize="sm"
                      color="gray.600"
                      _dark={{
                        color: "gray.400"
                      }}
                    >
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Modi quos quidem sequi illum facere recusandae
                      voluptatibus
                    </chakra.p>
                  </Box>

                  <Image h={48} w="full" fit="cover" mt={2} src={slide.img} />

                  <Flex
                    alignItems="center"
                    justifyContent="space-between"
                    px={4}
                    py={2}
                    bg="#383838"
                    roundedBottom="lg"
                  >
                    <chakra.h1 color="white" fontWeight="bold" fontSize="lg">
                      Start from 5.000
                    </chakra.h1>
                    <Button
                      as={Link}
                      href={slide.link}
                      px={2}
                      py={1}
                      bg="white"
                      fontSize="xs"
                      color="gray.900"
                      fontWeight="bold"
                      rounded="lg"
                      textTransform="uppercase"
                      _hover={{
                        bg: "gray.200"
                      }}
                      _focus={{
                        bg: "gray.400"
                      }}
                    >
                      Products
                    </Button>
                  </Flex>
                </Box>
              </Box>
            ))}
          </Flex>
          <Text {...arrowStyles} left="0" onClick={prevSlide}>
            &#10094;
          </Text>
          <Text {...arrowStyles} right="0" onClick={nextSlide}>
            &#10095;
          </Text>
        </Flex>
      </Flex>
    </Center>
  );
};

export default ProductCarousel;
