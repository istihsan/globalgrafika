import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  FormControl,
  FormLabel,
  Icon,
  HStack,
  Input,
  useNumberInput,
  useToast as useChakraToast,
  Divider
} from "@chakra-ui/react";
import { MdLocalShipping } from "react-icons/md";
import { useParams } from "react-router";
import ProductVariantSelect from "./productVariantSelect";
import NavBar from "../navbar";
import {
  setLocalStorageItem,
  getLocalStorageItem
} from "../../../../utils/localStorage";
import { useState, useEffect } from "react";
import { get } from "../../../../utils/request";
import currencyFormatter from "../../../../hooks/useCurrencyFormatter";

export default function ProductDescription() {
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [selectedVariant, setSelectedVariant] = useState("Small");
  const params = useParams();

  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: 1,
      min: 1,
      max: 99
    });
  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps();

  const toast = useChakraToast();

  useEffect(() => {
    const fetchProduct = async () => {
      setIsLoading(true);
      try {
        const product = await get(`/api/products/${params.id}`);
        setProduct(product);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, []);

  useEffect(() => {
    const storedCartItems = getLocalStorageItem("cart") || [];
    setCartItems(storedCartItems);
  }, []);

  const handleOnAddItemToCart = value => {
    const newItem = {
      id: product.id,
      title: product.title,
      price: product.price,
      productImageUrl: product.productImageUrl,
      productVariant: selectedVariant,
      quantity: input.value,
      unit: product.unit
    };
    toast({
      title: `Berhasil Ditambahkan ke Keranjang`,
      status: "success",
      duration: 2000
    });

    setCartItems(prevCart => [...prevCart, newItem]);
    setLocalStorageItem("cart", [...cartItems, newItem]);
  };
  const handleVariantChange = value => {
    setSelectedVariant(value);
  };

  return (
    <Box bgGradient={"linear(to-b,#6497b1, #b3cde0, #FFFFFF)"}>
      <NavBar />
      <Container maxW={"7xl"}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 24 }}
        >
          <Flex>
            <Image
              rounded={"md"}
              alt={"product image"}
              src={product.productImageUrl}
              fit={"cover"}
              align={"center"}
              w={"100%"}
              h={{ base: "100%", sm: "400px", lg: "500px" }}
            />
          </Flex>
          <Stack spacing={{ base: 6, md: 10 }}>
            <Box as={"header"}>
              <Heading
                lineHeight={1.1}
                fontWeight={700}
                fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
              >
                {product.title}
              </Heading>
              <Text
                color={useColorModeValue("gray.900", "gray.400")}
                fontWeight={500}
                fontSize={"2xl"}
              >
                {currencyFormatter(product.price)}/{product.unit}
              </Text>
            </Box>

            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={"column"}
              divider={
                <StackDivider
                  borderColor={useColorModeValue("gray.200", "gray.600")}
                />
              }
            >
              <VStack spacing={{ base: 4, sm: 6 }}>
                <Text
                  color={useColorModeValue("gray.500", "gray.400")}
                  fontSize={"2xl"}
                  fontWeight={"300"}
                >
                  {product.descriptionMain}
                </Text>
                <Text fontSize={"lg"}>{product.descriptionSecondary}</Text>
              </VStack>
              <Box>
                <Text
                  fontSize={{ base: "16px", lg: "18px" }}
                  color={"#009DFF"}
                  fontWeight={"500"}
                  textTransform={"uppercase"}
                  mb={"4"}
                >
                  Size / Ukuran
                </Text>
                <ProductVariantSelect onVariantChange={handleVariantChange} />
              </Box>
            </Stack>
            <Divider borderColor={"whiteAlpha.900"} />
            <FormControl>
              <FormLabel
                fontSize={{ base: "16px", lg: "18px" }}
                fontWeight="500"
                textTransform={"uppercase"}
                color="#009DFF"
                _dark={{
                  color: "gray.50"
                }}
              >
                Upload Referensi
              </FormLabel>
              <Flex
                mt={1}
                justify="center"
                px={6}
                pt={5}
                pb={6}
                borderWidth={2}
                _dark={{
                  color: "gray.500"
                }}
                borderStyle="dashed"
                rounded="md"
              >
                <VisuallyHidden>
                  <input id="file-upload" name="file-upload" type="file" />
                </VisuallyHidden>
                <Stack spacing={1} textAlign="center">
                  <Icon
                    mx="auto"
                    boxSize={12}
                    color="gray.400"
                    _dark={{
                      color: "gray.500"
                    }}
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </Icon>
                  <Flex
                    fontSize="sm"
                    color="gray.600"
                    _dark={{
                      color: "gray.400"
                    }}
                    alignItems="baseline"
                  >
                    <chakra.label
                      htmlFor="file-upload"
                      cursor="pointer"
                      rounded="md"
                      fontSize="md"
                      color="brand.600"
                      _dark={{
                        color: "brand.200"
                      }}
                      pos="relative"
                      _hover={{
                        color: "brand.400",
                        _dark: {
                          color: "brand.300"
                        }
                      }}
                    >
                      <span>Upload a file</span>
                      <VisuallyHidden>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                        />
                      </VisuallyHidden>
                    </chakra.label>
                    <Text pl={1}>or drag and drop</Text>
                  </Flex>
                  <Text
                    fontSize="xs"
                    color="gray.500"
                    _dark={{
                      color: "gray.50"
                    }}
                  >
                    PNG, JPG, GIF up to 10MB
                  </Text>
                </Stack>
              </Flex>
            </FormControl>
            <HStack>
              <Button
                {...dec}
                bg="whiteAlpha.800"
                borderColor="white"
                boxShadow="md"
              >
                -
              </Button>
              <Input {...input} isReadOnly={true} />
              <Button
                {...inc}
                bg="whiteAlpha.800"
                borderColor="white"
                boxShadow="md"
              >
                +
              </Button>
            </HStack>
            <Button
              onClick={handleOnAddItemToCart}
              rounded={"none"}
              w={"full"}
              mt={8}
              size={"lg"}
              py={"7"}
              bgGradient="linear(to-t, #009DFF, #0078C2, #005285)"
              color={useColorModeValue("white", "gray.900")}
              textTransform={"uppercase"}
              _hover={{
                transform: "translateY(2px)",
                bgGradient: "linear(to-b, #009DFF, #0078C2, #005285)",
                boxShadow: "lg"
              }}
            >
              Add to cart
            </Button>

            <Stack
              direction="row"
              alignItems="center"
              justifyContent={"center"}
            >
              <MdLocalShipping />
              <Text>2-3 business days delivery</Text>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
