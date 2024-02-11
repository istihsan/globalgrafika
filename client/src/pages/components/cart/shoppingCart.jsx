import React, { useEffect, useState } from "react";
import {
  VisuallyHidden,
  Icon,
  chakra,
  Box,
  SimpleGrid,
  Heading,
  VStack,
  HStack,
  Card,
  Image,
  CardBody,
  Text,
  CardFooter,
  Button,
  Stack,
  Input,
  Spacer,
  Center,
  Flex,
  useNumberInput,
  ModalOverlay
} from "@chakra-ui/react";
import { getLocalStorageItem } from "../../../utils/localStorage";
import { FaTrash } from "react-icons/fa";
import FormOrder from "./formOrder";
import currencyFormatter from "../../../hooks/useCurrencyFormatter";
import useCalculateTotalOrder from "../../../hooks/useCalculateTotalOrder";

const ShoppingCart = () => {
  const [cartData, setCartData] = useState(getLocalStorageItem("cart") || []);
  const additionalFees = 1000;
  const shippingCost = 20000;
  const { totalOrder, totalItemsPrice } = useCalculateTotalOrder(
    cartData,
    additionalFees,
    shippingCost
  );
  const [formData, setFormData] = useState({
    personalInfo: {},
    addressInfo: {},
    deliveryOption: {}
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartData));
  }, [cartData]);

  useEffect(() => {
    setCartData(prevCartData =>
      prevCartData.map(item => ({ ...item, file: null }))
    );
  }, []);

  const handleDelete = itemToDelete => {
    const updatedCart = cartData.filter(item => item !== itemToDelete);
    setCartData(updatedCart);
  };

  const handleFileChange = (e, index) => {
    const file = e.target.files[0];
    setCartData(_cartData => {
      const updatedCartData = [..._cartData];
      updatedCartData[index].file = file;
      return updatedCartData;
    });
  };

  const handleRemoveFile = index => {
    setCartData(_cartData => {
      const updatedCartData = [..._cartData];
      updatedCartData[index].file = null;
      return updatedCartData;
    });
    const fileInput = document.getElementById(`file-upload-${index}`);
    if (fileInput) {
      fileInput.value = "";
    }
  };

  console.log(cartData, "=============");
  return (
    <>
      <SimpleGrid columns={2} bgColor={"blackAlpha.100"}>
        <Card minW={"100vh"} minH={"100vh"} m="4%">
          <Center mt={3}>
            <Heading color="blackAlpha.700">Your Cart</Heading>
          </Center>
          <VStack m={5}>
            {cartData.map((item, index) => {
              const hasImage = item.file;
              console.log(index, hasImage, "=========");
              return (
                <Box key={index} minW="95vh" m={"2.5%"}>
                  <Card
                    direction={{ base: "column", sm: "row" }}
                    overflow="hidden"
                    variant="outline"
                  >
                    <Image
                      objectFit="cover"
                      maxW={{ base: "100%", sm: "200px" }}
                      src={item.productImageUrl}
                      alt={item.title}
                    />

                    <Stack minW="75%">
                      <CardBody>
                        <Heading size="md">{item.title}</Heading>
                        <Text py="2">{item.productVariant}</Text>
                        <Text>{`Quantity: ${item.quantity}${item.unit}`}</Text>
                        {item.customerNote ? (
                          <Text py={2}>{`Note: ${item.customerNote}`}</Text>
                        ) : (
                          <Text></Text>
                        )}
                        <VisuallyHidden>
                          <input
                            id={`file-upload-${index}`}
                            name={`file-upload-${index}`}
                            type="file"
                            onChange={e => handleFileChange(e, index)}
                          />
                        </VisuallyHidden>
                        <Stack spacing={1} textAlign="center">
                          <Stack spacing={1} textAlign="center">
                            {hasImage ? (
                              <Image
                                onClick={() => handleRemoveFile(index)}
                                src={
                                  item.file instanceof Blob ||
                                  item.file instanceof File
                                    ? URL.createObjectURL(item.file)
                                    : ""
                                }
                                alt={item.file.name}
                                boxSize={48}
                              />
                            ) : (
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
                            )}
                          </Stack>

                          <Flex
                            direction="column"
                            fontSize="sm"
                            color="gray.600"
                            _dark={{
                              color: "gray.400"
                            }}
                            alignItems="center"
                          >
                            {hasImage ? null : (
                              <chakra.label
                                htmlFor={`file-upload-${index}`}
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
                                    id={`file-upload-${index}`}
                                    name={`file-upload-${index}`}
                                    type="file"
                                    onChange={e => handleFileChange(e, index)}
                                  />
                                </VisuallyHidden>
                              </chakra.label>
                            )}
                            {hasImage ? null : (
                              <Text
                                fontSize="sm"
                                color="gray.500"
                                mt={1}
                                _dark={{ color: "gray.50" }}
                              >
                                or drag and drop
                              </Text>
                            )}
                          </Flex>
                          {hasImage ? null : (
                            <Text
                              fontSize="xs"
                              color="gray.500"
                              _dark={{
                                color: "gray.50"
                              }}
                            >
                              PNG, JPG, GIF up to 10MB
                            </Text>
                          )}
                          {hasImage && (
                            <Button
                              size="sm"
                              onClick={() => handleRemoveFile(index)}
                            >
                              Remove File
                            </Button>
                          )}
                        </Stack>
                      </CardBody>

                      <CardFooter>
                        <HStack>
                          <QuantityInput
                            item={item}
                            index={index}
                            setCartData={setCartData}
                          />
                          <Button
                            ms={1}
                            variant="solid"
                            colorScheme="red"
                            onClick={() => handleDelete(item)}
                          >
                            <FaTrash />
                          </Button>
                          <Spacer />
                          <Box
                            variant="outline"
                            color="#63B3ED"
                            border="1px"
                            rounded={"md"}
                            p="7px"
                            ms="50%"
                            minW="23%"
                            position="absolute"
                          >
                            <Center>
                              {`Price: ${currencyFormatter(
                                item.price * item.quantity
                              )}`}
                            </Center>
                          </Box>
                          <Spacer />
                        </HStack>
                      </CardFooter>
                    </Stack>
                  </Card>
                </Box>
              );
            })}
            <VStack>
              <Card
                minW={"80vh"}
                mx="4%"
                color={"blackAlpha.700"}
                fontFamily={"Staatliches"}
              >
                <Flex m="2%">
                  Total Harga Barang
                  <Spacer />
                  {currencyFormatter(totalItemsPrice)}
                </Flex>
              </Card>
              <Card
                minW={"80vh"}
                mx="4%"
                color={"blackAlpha.700"}
                fontFamily={"Staatliches"}
              >
                <Flex m="2%">
                  Biaya Lainnya
                  <Spacer />
                  {currencyFormatter(additionalFees)}
                </Flex>
              </Card>
              <Card
                minW={"80vh"}
                mx="4%"
                color={"blackAlpha.700"}
                fontFamily={"Staatliches"}
              >
                <Flex m="2%">
                  Biaya Pengiriman
                  <Spacer />
                  {currencyFormatter(shippingCost)}
                </Flex>
              </Card>
              <Card
                minW={"90vh"}
                minH={"5vh"}
                mx="4%"
                color={"blackAlpha.700"}
                fontFamily={"Staatliches"}
                fontSize={"4xl"}
              >
                <Flex m="4%">
                  Total Order
                  <Spacer />
                  <Text color="#B8182B">{currencyFormatter(totalOrder)}</Text>
                </Flex>
              </Card>
            </VStack>
          </VStack>
        </Card>
        <FormOrder
          cartData={cartData}
          setCartData={setCartData}
          formData={formData}
          setFormData={updatedData => setFormData(updatedData)}
          totalOrder={totalOrder}
        />
      </SimpleGrid>
    </>
  );
};

function QuantityInput({ item, index, setCartData }) {
  const handleOnAddQuantity = () => {
    setCartData(_cartData => {
      const updatedCartData = [..._cartData];
      updatedCartData[index].quantity = updatedCartData[index].quantity + 1;
      return updatedCartData;
    });
  };
  const handleOnDecreaseQuantity = () => {
    setCartData(_cartData => {
      const updatedCartData = [..._cartData];
      updatedCartData[index].quantity = updatedCartData[index].quantity - 1;
      return updatedCartData;
    });
  };

  return (
    <HStack>
      <Button
        bg="whiteAlpha.800"
        borderColor="white"
        boxShadow="md"
        onClick={handleOnDecreaseQuantity}
      >
        -
      </Button>
      <Input isReadOnly={true} value={item.quantity} />
      <Button
        mr={5}
        bg="whiteAlpha.800"
        borderColor="white"
        boxShadow="md"
        onClick={handleOnAddQuantity}
      >
        +
      </Button>
    </HStack>
  );
}

export default ShoppingCart;
