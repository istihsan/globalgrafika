import image from "../../../images/brochureCarousel/image1.jpg";
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Button,
  Image,
  Flex
} from "@chakra-ui/react";

export default function ProductsBrochure() {
  return (
    <Flex p={35} w="full" alignItems="center" justifyContent="center">
      <Center py={6}>
        <Box
          bg="#edf3f8"
          maxW={"445px"}
          w={"full"}
          boxShadow={"2xl"}
          rounded={"md"}
          p={6}
          me={6}
          overflow={"hidden"}
        >
          <Box
            maxH={"15%"}
            bg={"gray.100"}
            mt={-6}
            mx={-6}
            mb={6}
            pos={"relative"}
          >
            <Image src={image} fill alt="Example" />
          </Box>
          <Stack>
            <Text
              color={"green.500"}
              textTransform={"uppercase"}
              fontWeight={800}
              fontSize={"sm"}
              letterSpacing={1.1}
            >
              Blog
            </Text>
            <Heading fontSize={"2xl"} fontFamily={"body"}>
              Boost your conversion rate
            </Heading>
            <Text color={"gray.500"}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum.
            </Text>
          </Stack>
          <Button
            bgGradient="linear(to-t, #009DFF, #0078C2, #005285)"
            color={"white"}
            rounded={"full"}
            w={"full"}
            px={6}
            mt={5}
            _hover={{
              bgGradient: "linear(to-b, #009DFF, #0078C2, #005285)"
            }}
          >
            Learn More
          </Button>
        </Box>
      </Center>
      <Center py={6}>
        <Box
          bg="#edf3f8"
          maxW={"445px"}
          w={"full"}
          boxShadow={"2xl"}
          rounded={"md"}
          p={6}
          overflow={"hidden"}
        >
          <Box
            maxH={"15%"}
            bg={"gray.100"}
            mt={-6}
            mx={-6}
            mb={6}
            pos={"relative"}
          >
            <Image src={image} fill alt="Example" />
          </Box>
          <Stack>
            <Text
              color={"green.500"}
              textTransform={"uppercase"}
              fontWeight={800}
              fontSize={"sm"}
              letterSpacing={1.1}
            >
              Blog
            </Text>
            <Heading fontSize={"2xl"} fontFamily={"body"}>
              Boost your conversion rate
            </Heading>
            <Text color={"gray.500"}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum.
            </Text>
          </Stack>
          <Button
            bgGradient="linear(to-t, #009DFF, #0078C2, #005285)"
            color={"white"}
            rounded={"full"}
            w={"full"}
            px={6}
            mt={5}
            _hover={{
              bgGradient: "linear(to-b, #009DFF, #0078C2, #005285)"
            }}
          >
            Learn More
          </Button>
        </Box>
      </Center>
    </Flex>
  );
}
