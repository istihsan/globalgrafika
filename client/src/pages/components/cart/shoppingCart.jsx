import React from "react";
import {
  Box,
  Flex,
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
  useNumberInput
} from "@chakra-ui/react";
import { getLocalStorageItem } from "../../../utils/localStorage";
import { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import FormCart from "./formCart";

export default function ShoppingCart() {
  const [cartData, setCartData] = useState(getLocalStorageItem("cart") || []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartData));
  }, [cartData]);

  const handleDelete = itemToDelete => {
    const updatedCart = cartData.filter(item => item !== itemToDelete);
    setCartData(updatedCart);
  };

  return (
    <Flex>
      <VStack m={5}>
        {cartData.map((item, index) => (
          <Box key={index} minW="100vh" m={"2.5%"}>
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

              <Stack>
                <CardBody>
                  <Heading size="md">{item.title}</Heading>
                  <Text py="2">{item.productVariant}</Text>
                  <Text>{`Quantity: ${item.quantity}${item.unit}`}</Text>
                </CardBody>

                <CardFooter>
                  <HStack>
                    <QuantityInput item={item} />
                    <Spacer />
                    <Button
                      ms={5}
                      variant="solid"
                      colorScheme="red"
                      onClick={() => handleDelete(item)}
                    >
                      <FaTrash />
                    </Button>
                    <Spacer />
                    <Button variant="solid" colorScheme="blue">
                      {`Price: ${item.price}`}
                    </Button>
                  </HStack>
                </CardFooter>
              </Stack>
            </Card>
          </Box>
        ))}
      </VStack>
      <FormCart />
    </Flex>
  );
}

function QuantityInput({ item }) {
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: item.quantity,
      min: 1,
      max: 99
    });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps();

  return (
    <HStack>
      <Button {...dec} bg="whiteAlpha.800" borderColor="white" boxShadow="md">
        -
      </Button>
      <Input {...input} isReadOnly={true} />
      <Button
        {...inc}
        mr={5}
        bg="whiteAlpha.800"
        borderColor="white"
        boxShadow="md"
      >
        +
      </Button>
    </HStack>
  );
}
