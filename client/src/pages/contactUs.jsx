import { Fragment } from "react";
import {
  Container,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Stack,
  Button,
  Heading,
  useColorModeValue,
  VStack,
  Flex,
  Text,
  Icon,
  Divider
} from "@chakra-ui/react";
import { GoLocation } from "react-icons/go";
import { BsPhone } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import NavBar from "./components/common/navbar";
import Footer from "./components/common/footer";

const contactOptions = [
  {
    label: "Address",
    value:
      "Jl. Margonda No.399, Pondok Cina, Kecamatan Beji, Kota Depok, Jawa Barat 16424",
    icon: GoLocation
  },
  {
    label: "Phone Number",
    value: "(021) 77212660",
    icon: BsPhone
  },
  {
    label: "Email",
    value: "global_grafika@yahoo.co.id",
    icon: HiOutlineMail
  }
];

const ContactUs = () => {
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
              Contact Us
            </Heading>
            <Text fontSize="md" textAlign="center">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque
            </Text>
          </Flex>
          <Stack
            spacing={{ base: 6, md: 0 }}
            direction={{ base: "column", md: "row" }}
            justifyContent="space-between"
          >
            {contactOptions.map((option, index) => (
              <Fragment key={index}>
                <Stack
                  spacing={3}
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                  px={3}
                >
                  <Icon as={option.icon} w={10} h={10} color="#0078C2" />
                  <Text
                    fontSize="lg"
                    fontWeight="semibold"
                    color={"whiteAlpha.800"}
                  >
                    {option.label}
                  </Text>
                  <Text
                    fontSize="md"
                    textAlign="center"
                    color={"whiteAlpha.800"}
                  >
                    {option.value}
                  </Text>
                </Stack>
                {contactOptions.length - 1 !== index && (
                  <Flex d={{ base: "none", md: "flex" }}>
                    <Divider orientation="vertical" />
                  </Flex>
                )}
              </Fragment>
            ))}
          </Stack>
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
                  <FormLabel>Name</FormLabel>
                  <Input type="text" placeholder="Ahmad" rounded="md" />
                </FormControl>
                <FormControl id="email">
                  <FormLabel>Email</FormLabel>
                  <Input
                    type="email"
                    placeholder="test@test.com"
                    rounded="md"
                  />
                </FormControl>
              </Stack>
              <FormControl id="subject">
                <FormLabel>Subject</FormLabel>
                <Input type="text" placeholder="Banner Promosi" rounded="md" />
              </FormControl>
              <FormControl id="message">
                <FormLabel>Message</FormLabel>
                <Textarea
                  size="lg"
                  placeholder="Enter your message"
                  rounded="md"
                />
              </FormControl>
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
                Send Message
              </Button>
            </VStack>
          </VStack>
        </Stack>
      </Container>
      <Footer />
    </Flex>
  );
};

export default ContactUs;
