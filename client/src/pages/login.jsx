import * as React from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  useColorModeValue,
  VStack,
  Checkbox,
  Link,
  Image,
  Flex
} from "@chakra-ui/react";

const Login = () => {
  return (
    <Stack minH="100vh" direction={{ base: "column-reverse", md: "row" }}>
      <Flex flex={1}>
        <Image
          alt="Cover image"
          objectFit="cover"
          src="https://images.pexels.com/photos/191429/pexels-photo-191429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
      </Flex>
      <Flex
        p={8}
        flex={1}
        align="center"
        justifyContent="center"
        bgGradient={"linear(to-l, #6497b1 10%, #b3cde0, #FFFFFF)"}
      >
        <Stack spacing={4}>
          <Stack align="center">
            <Heading fontSize="2xl">Sign in to your account</Heading>
          </Stack>
          <VStack
            as="form"
            spacing={8}
            boxSize={{ base: "xs", sm: "sm", md: "md" }}
            h="max-content !important"
            bg={useColorModeValue("white", "gray.700")}
            rounded="lg"
            boxShadow="lg"
            p={{ base: 5, sm: 10 }}
          >
            <VStack spacing={4} w="100%">
              <FormControl id="email">
                <FormLabel>Email</FormLabel>
                <Input rounded="md" type="email" />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input rounded="md" type="password" />
              </FormControl>
            </VStack>
            <VStack w="100%">
              <Stack direction="row" justifyContent="space-between" w="100%">
                <Checkbox colorScheme="blue" size="md">
                  Remember me
                </Checkbox>
              </Stack>
              <Button
                bg="#009DFF"
                color="white"
                _hover={{
                  bg: "#005285"
                }}
                rounded="md"
                w="100%"
              >
                Sign in
              </Button>
              <Link href="/" w="100%">
                <Button variant={"outline"} rounded="md" w="100%">
                  Back to Home
                </Button>
              </Link>
            </VStack>
          </VStack>
        </Stack>
      </Flex>
    </Stack>
  );
};

export default Login;
