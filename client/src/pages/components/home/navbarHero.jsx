import React from "react";
import {
  Link,
  Box,
  Flex,
  Button,
  Heading,
  Spacer,
  Divider,
  Center
} from "@chakra-ui/react";
import "@fontsource/bebas-neue";
import "@fontsource/press-start-2p";
import "@fontsource/syne-mono";
import { Icon } from "@chakra-ui/react";
import { FaShoppingCart, FaUserLock } from "react-icons/fa";

const NavBarHero = () => {
  return (
    <Flex minWidth="max-content" alignItems="center" gap="2" height="100%">
      <Box p="2" mt="1%">
        <Link href="/">
          <Heading
            size="xl"
            bgClip={"text"}
            bgGradient={
              "linear(to-r, #121212, #242424, #4a4a4a, #696969, #969493, #c9c8c7 )"
            }
            fontFamily={"Bebas Neue"}
          >
            Global Grafika
          </Heading>
        </Link>
      </Box>
      <Spacer />
      <Link href="/aboutus" pe="4" pt="4" color={"blackAlpha.700"}>
        About Us
      </Link>
      <Link href="/products" pe="2" pt="4" color={"blackAlpha.700"}>
        Products
      </Link>
      <Link href="/contactus" mt={"1%"} me={"1%"}>
        <Button
          size="sm"
          rounded="md"
          color={["white"]}
          bg={["black"]}
          _hover={{
            bg: "white",
            color: "black"
          }}
        >
          Contact Us!
        </Button>
      </Link>
      <Center h={"20px"} mt={"1.1%"} me={"1%"}>
        <Divider orientation="vertical" borderColor={"gray"} />
      </Center>
      <Link href="/cart" pe="4" mt="6" color={"blackAlpha.700"}>
        <Icon as={FaShoppingCart} />
      </Link>
      <Link href="/dashboard" pe="4" mt="6" color={"blackAlpha.700"}>
        <Icon as={FaUserLock} />
      </Link>
    </Flex>
  );
};

export default NavBarHero;
