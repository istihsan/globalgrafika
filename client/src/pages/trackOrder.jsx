import {
  Container,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  useColorModeValue,
  VStack,
  Flex,
  Text
} from "@chakra-ui/react";
import NavBar from "./components/common/navbar";
import Footer from "./components/common/footer";

const TrackOrder = () => {
  return (
    <Flex
      direction="column"
      bgGradient={"radial(#6497b1 10%, #b3cde0, #FFFFFF)"}
    >
      <NavBar />
      <Container maxW="7xl" py={10} px={{ base: 5, md: 8 }} minH={"100vh"}>
        <Stack spacing={10}>
          <Flex align="center" justifyContent="center" direction="column">
            <Heading fontSize="4xl" mb={2} color={"blackAlpha.800"}>
              Track Your Order
            </Heading>
            <Text fontSize="md" textAlign="center">
              Lacak pesanan anda dengan mengisi form berikut.
            </Text>
          </Flex>
          <VStack
            as="form"
            spacing={8}
            w="100%"
            bg={useColorModeValue("white", "gray.700")}
            rounded="lg"
            boxShadow="lg"
            p={{ base: 5, sm: 10 }}
          >
            <VStack spacing={4} w="100%">
              <Stack
                w="100%"
                spacing={3}
                direction={{ base: "column", md: "row" }}
              >
                <FormControl id="name">
                  <FormLabel>First Name</FormLabel>
                  <Input type="text" placeholder="Istihsan" rounded="md" />
                </FormControl>
                <FormControl id="email">
                  <FormLabel>Order Number</FormLabel>
                  <Input type="email" placeholder="#00001" rounded="md" />
                </FormControl>
              </Stack>
            </VStack>
            <VStack w="100%">
              <Button
                bg="#009DFF"
                color="white"
                _hover={{
                  bg: "#005285"
                }}
                rounded="md"
                w={{ base: "100%", md: "max-content" }}
              >
                Track Order
              </Button>
            </VStack>
          </VStack>
        </Stack>
      </Container>
      <Footer />
    </Flex>
  );
};

export default TrackOrder;
