import {
  Box,
  Flex,
  Heading,
  HStack,
  Link,
  Stack,
  useColorModeValue as mode
} from "@chakra-ui/react";
import { CartItem } from "./cartItem";
import { CartOrderSummary } from "./cartOrderSummary";
import { cartData } from "./_data";
import FormCart from "./formCart";

export const ShoppingCart = () => (
  <Box
    mx="auto"
    py={{
      base: "6",
      md: "8",
      lg: "12"
    }}
  >
    <Stack
      direction={{
        base: "column",
        lg: "row"
      }}
      align={{
        lg: "flex-start"
      }}
      spacing={{
        base: "8",
        md: "16"
      }}
    >
      <Stack
        spacing={{
          base: "8",
          md: "10"
        }}
        flex="2"
      >
        <Heading fontSize="2xl" fontWeight="extrabold">
          Shopping Cart (3 items)
        </Heading>

        <Stack spacing="6">
          {cartData.map(item => (
            <CartItem key={item.id} {...item} />
          ))}
        </Stack>
        <CartOrderSummary />
      </Stack>

      <Flex direction="column" align="center" flex="1">
        <FormCart />
        <HStack mt="6" fontWeight="semibold">
          <p>or</p>
          <Link color={mode("blue.500", "blue.200")}>Continue shopping</Link>
        </HStack>
      </Flex>
    </Stack>
  </Box>
);

export default ShoppingCart;
