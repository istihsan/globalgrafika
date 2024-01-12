import { Flex, Box, chakra, Link, Divider, Center } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { get } from "../../../../utils/request";
import { useCurrencyFormatter } from "../../../../hooks/useCurrencyFormatter";

const ProductCardDigitalPrintingSmall = () => {
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

  const formatCurrency = amount => {
    const formatter = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR"
    });

    return formatter.format(amount);
  };

  return (
    <Flex p={50} w="full" alignItems="center" justifyContent="center">
      {isLoading ? (
        // Show loading state
        <div>Loading...</div>
      ) : error ? (
        // Show error state
        <div>Error: {error.message}</div>
      ) : (
        // Render products
        products.map(product => (
          <Flex
            key={product.id}
            href={`/products/${
              product.categories
            }/detail/${product._id.toString()}`}
            as={Link}
            direction="column"
            justifyContent="center"
            alignItems="center"
            w="sm"
            mx="auto"
          >
            <Box
              bg="gray.300"
              h={64}
              w="full"
              rounded="lg"
              shadow="md"
              bgSize="cover"
              bgPos="center"
              style={{
                backgroundImage: `url(${product.productImageUrl})`
              }}
            ></Box>

            <Box
              w={{
                base: 64,
                md: 72
              }}
              bgGradient={"linear(to-t, #6497b1 10%, #b3cde0, #FFFFFF)"}
              mt={-10}
              shadow="lg"
              rounded="lg"
              overflow="hidden"
            >
              <chakra.h3
                py={2}
                textAlign="center"
                fontWeight="bold"
                textTransform="uppercase"
                color="gray.800"
                _dark={{
                  color: "white"
                }}
                letterSpacing={1}
              >
                {product.title}
              </chakra.h3>
              <Center>
                <Divider maxW={"90%"} borderColor={"gray"} />
              </Center>
              <Flex
                alignItems="center"
                justifyContent="space-between"
                py={2}
                px={3}
              >
                <chakra.span
                  fontWeight="bold"
                  color="gray.800"
                  _dark={{
                    color: "gray.200"
                  }}
                >
                  Start from {formatCurrency(product.price)}
                </chakra.span>
                <chakra.button
                  as={Link}
                  bg="gray.800"
                  fontSize="xs"
                  fontWeight="bold"
                  color="white"
                  px={2}
                  py={1}
                  rounded="lg"
                  textTransform="uppercase"
                  _hover={{
                    bg: "gray.700",
                    _dark: {
                      bg: "gray.600"
                    }
                  }}
                  _focus={{
                    bg: "gray.700",
                    _dark: {
                      bg: "gray.600"
                    },
                    outline: "none"
                  }}
                >
                  Detail
                </chakra.button>
              </Flex>
            </Box>
          </Flex>
        ))
      )}
    </Flex>
  );
};
export default ProductCardDigitalPrintingSmall;
