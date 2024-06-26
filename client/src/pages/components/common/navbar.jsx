import React from "react";
import {
  Link,
  Box,
  Flex,
  Button,
  Heading,
  Spacer,
  Center,
  Divider
} from "@chakra-ui/react";
import "@fontsource/bebas-neue";
import "@fontsource/press-start-2p";
import "@fontsource/syne-mono";
import { Icon } from "@chakra-ui/react";
import { FaShoppingCart, FaUserLock } from "react-icons/fa";

const NavBar = () => {
  return (
    <Flex minWidth="max-content" alignItems="center" gap="2" mx="5%">
      <Box p="2" mt="1%">
        <Link href="/">
          <Heading
            size="xl"
            bgClip={"text"}
            bgGradient={"linear(to-r, #47B6FA, #47B6FA, #47B6FA, #c3e3f7, )"}
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
      <Link href="/products" pe="4" pt="4" color={"blackAlpha.700"}>
        Products
      </Link>
      <Button
        href='/contactus'
        mt={"1%"}
        p={"4"}
        size="sm"
        rounded="md"
        color={["white"]}
        bg={["black"]}
        _hover={{
          bg: "white",
          color: "black"
        }}
      >
        <Link href="/contactus">Contact Us!</Link>
      </Button>
      <Center h={"20px"} mt={"1.1%"} me={"1%"}>
        <Divider orientation="vertical" borderColor={"gray"} />
      </Center>
      <Link href="/checkout" pe="4" mt="6" color={"blackAlpha.700"}>
        <Icon as={FaShoppingCart} />
      </Link>
      <Link href="/dashboard" pe="4" mt="6" color={"blackAlpha.700"}>
        <Icon as={FaUserLock} />
      </Link>
    </Flex>
  );
};

export default NavBar;
