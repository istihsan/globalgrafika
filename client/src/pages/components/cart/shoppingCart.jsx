import React, { useEffect, useState } from "react";
import {
  useDisclosure,
  Modal,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
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
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [modalImageSrc, setModalImageSrc] = useState(null);
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

  const handleDelete = itemToDelete => {
    const updatedCart = cartData.filter(item => item !== itemToDelete);
    setCartData(updatedCart);
  };

  const handleQuantityChange = (item, value) => {
    const updatedCart = cartData.map(cartItem =>
      cartItem === item ? { ...cartItem, quantity: value } : cartItem
    );
    setCartData(updatedCart);
  };

  const handleOpenModal = item => {
    setModalImageSrc(item.referenceFile.url);
    onOpen();
  };
  return (
    <>
      <SimpleGrid columns={2} bgColor={"blackAlpha.100"}>
        <Card minW={"100vh"} minH={"100vh"} m="4%">
          <Center mt={3}>
            <Heading color="blackAlpha.700">Your Cart</Heading>
          </Center>
          <VStack m={5}>
            {cartData.map((item, index) => (
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
                      {item.referenceFile ? (
                        <Button
                          onClick={() => handleOpenModal(item)}
                          colorScheme="blue"
                          variant="ghost"
                          ml="-2%"
                        >
                          {item.referenceFile.name}
                        </Button>
                      ) : (
                        <Text></Text>
                      )}
                      <Modal
                        isOpen={isOpen}
                        onClose={() => {
                          setModalImageSrc(null);
                          onClose();
                        }}
                      >
                        <ModalOverlay />
                        <ModalContent>
                          <ModalHeader>Modal Title</ModalHeader>
                          <ModalCloseButton />
                          <ModalBody>
                            {modalImageSrc && <Image src={modalImageSrc} />}
                          </ModalBody>

                          <ModalFooter>
                            <Button colorScheme="blue" mr={3} onClick={onClose}>
                              Close
                            </Button>
                          </ModalFooter>
                        </ModalContent>
                      </Modal>
                    </CardBody>

                    <CardFooter>
                      <HStack>
                        <QuantityInput
                          item={item}
                          onQuantityChange={value =>
                            handleQuantityChange(item, value)
                          }
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
            ))}
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

function QuantityInput({ item, onQuantityChange }) {
  const {
    value,
    getInputProps,
    getIncrementButtonProps,
    getDecrementButtonProps
  } = useNumberInput({
    step: 1,
    defaultValue: item.quantity,
    min: 1,
    max: 99
  });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps();

  useEffect(() => {
    onQuantityChange(parseInt(value, 10));
  }, [value, onQuantityChange]);

  return (
    <HStack>
      <Button
        {...dec}
        bg="whiteAlpha.800"
        borderColor="white"
        boxShadow="md"
        onClick={dec.onClick}
      >
        -
      </Button>
      <Input
        {...input}
        isReadOnly={true}
        onChange={e => onQuantityChange(parseInt(e.target.value, 10))}
      />
      <Button
        {...inc}
        mr={5}
        bg="whiteAlpha.800"
        borderColor="white"
        boxShadow="md"
        onClick={inc.onClick}
      >
        +
      </Button>
    </HStack>
  );
}

export default ShoppingCart;
