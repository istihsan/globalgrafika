import {
  chakra,
  Link,
  Stack,
  Box,
  Button,
  useColorModeValue
} from "@chakra-ui/react";
// Here we have used react-icons package for the icon
import { FaSearch, FaShoppingBag } from "react-icons/fa";
import NavBar from "./navbar";

const HeroProduct = () => {
  return (
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
              Explore Our Products
            </chakra.h1>
            <chakra.h1
              color="gray.400"
              fontSize="xl"
              maxW="600px"
              lineHeight={1.2}
            >
              At Global Grafika, we believe in the power of innovation and
              quality. Our commitment to providing exceptional products is at
              the heart of everything we do. Explore our diverse range of
              products that cater to your unique needs, blending functionality,
              style, and reliability.
            </chakra.h1>

            <Stack direction={{ base: "column", md: "row" }} spacing={3}>
              <Button
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
              <Button
                leftIcon={<FaSearch />}
                as={Link}
                href="/trackorder"
                rounded="md"
                colorScheme="gray"
                variant="solid"
              >
                Track Your Order
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroProduct;
