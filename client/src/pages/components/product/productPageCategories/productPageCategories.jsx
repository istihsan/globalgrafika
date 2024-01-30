import {
  chakra,
  Stack,
  Box,
  Button,
  Link,
  useColorModeValue
} from "@chakra-ui/react";
import NavBar from "../navbar";
import { FaShoppingBag } from "react-icons/fa";
import { useEffect, useState } from "react";
import { get } from "../../../../utils/request";
import ProductCardCategories from "./productCardCategories";
import Footer from "../../common/footer";

const ProductPageCategories = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const result = await get("/api/products");
        setProducts(result);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);
  return (
    <>
      <Box pb={8}>
        <Stack
          pos="relative"
          bgGradient={`linear(to-b, #6497b1 , #b3cde0, #FFFFFF 90%)`}
          height="250px"
          w="100%"
        >
          <NavBar />
        </Stack>
        <Box
          maxW="3xl"
          p={4}
          isolation="isolate"
          zIndex={3}
          mt="-10rem"
          marginInline="auto"
        >
          <Box
            boxShadow={useColorModeValue(
              "0 4px 6px rgba(160, 174, 192, 0.6)",
              "0 4px 6px rgba(9, 17, 28, 0.9)"
            )}
            bg={useColorModeValue("white", "gray.800")}
            p={{ base: 4, sm: 8 }}
            overflow="hidden"
            rounded="2xl"
          >
            <Stack
              pos="relative"
              zIndex={1}
              direction="column"
              spacing={5}
              textAlign="left"
            >
              <chakra.h1 fontSize="4xl" lineHeight={1.2} fontWeight="bold">
                Explore Our{" "}
                <chakra.span
                  color="teal"
                  bg="linear-gradient(transparent 50%, #83e9e7 50%)"
                >
                  Small Digital Printing Products
                </chakra.span>
              </chakra.h1>
              <chakra.h1
                color="gray.400"
                fontSize="xl"
                maxW="600px"
                lineHeight={1.2}
              >
                From ID Cards to Posters, Invitation to Brochure. You can find
                it here and sit back, relax and we will deliver the high quality
                products to your front door.
              </chakra.h1>

              <Stack direction={{ base: "column", md: "row" }} spacing={3}>
                <Button
                  as={Link}
                  href="/products"
                  leftIcon={<FaShoppingBag />}
                  h={10}
                  px={6}
                  color="white"
                  fontSize="md"
                  variant="solid"
                  rounded="md"
                  lineHeight={1}
                  bg="blue.400"
                  _hover={{ bg: "blue.600" }}
                >
                  Browse Categories
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <ProductCardCategories />
      </Box>
      <Footer />
    </>
  );
};

export default ProductPageCategories;
