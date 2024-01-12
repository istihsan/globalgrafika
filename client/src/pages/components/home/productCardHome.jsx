import {
  Box,
  Button,
  Flex,
  HStack,
  VStack,
  chakra,
  Stack,
  Link
} from "@chakra-ui/react";
import BackgroundHero from "../../../images/white-abstract-background-with-hexagon-pattern-style-seamless-concept_7505-1703.avif";

const ProductCardHome = () => {
  return (
    <Flex
      bgGradient={"radial(#6497b1 10%, #b3cde0, #FFFFFF)"}
      p={50}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <VStack>
        <HStack>
          <Box
            bgImage={BackgroundHero}
            mx={{ lg: 8 }}
            transition="transform 0.2s"
            _hover={{ transform: "scale(1.05)" }}
            display={{
              lg: "flex"
            }}
            maxW={{
              lg: "5xl"
            }}
            shadow={{
              lg: "lg"
            }}
            rounded={{
              lg: "lg"
            }}
          >
            <Box
              w={{
                lg: "50%"
              }}
            >
              <Box
                ratio={16 / 9}
                h={{
                  base: 64,
                  lg: "full"
                }}
                rounded={{
                  lg: "lg"
                }}
                bgSize="cover"
                style={{
                  backgroundImage:
                    "url('https://source.unsplash.com/life-is-your-creation-card-sFTMwH2Tvec')"
                }}
              ></Box>
            </Box>

            <Box
              py={12}
              px={6}
              maxW={{
                base: "xl",
                lg: "5xl"
              }}
              w={{
                lg: "50%"
              }}
            >
              <chakra.h2
                fontSize={{
                  base: "2xl",
                  md: "3xl"
                }}
                color={"#382b28"}
                fontWeight="bold"
              >
                Build Your New Brochures
              </chakra.h2>
              <chakra.p
                mt={4}
                color="gray.600"
                _dark={{
                  color: "gray.400"
                }}
              >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem
                modi reprehenderit vitae exercitationem aliquid dolores ullam
                temporibus enim expedita aperiam mollitia iure consectetur dicta
                tenetur, porro consequuntur saepe accusantium consequatur.
              </chakra.p>

              <Box mt={8}>
                <Button
                  bgGradient="linear(to-t, #009DFF, #0078C2, #005285)"
                  color={"white"}
                  rounded={"full"}
                  px={6}
                  _hover={{
                    bgGradient: "linear(to-b, #009DFF, #0078C2, #005285)"
                  }}
                >
                  Order Now
                </Button>
              </Box>
            </Box>
          </Box>
          <Box
            transition="transform 0.2s"
            _hover={{ transform: "scale(1.05)" }}
            bg="white"
            _dark={{ bg: "gray.800" }}
            mx={{ lg: 8 }}
            display={{
              lg: "flex"
            }}
            maxW={{
              lg: "5xl"
            }}
            shadow={{
              lg: "lg"
            }}
            rounded={{
              lg: "lg"
            }}
          >
            <Box
              w={{
                lg: "50%"
              }}
            >
              <Box
                h={{
                  base: 64,
                  lg: "full"
                }}
                rounded={{
                  lg: "lg"
                }}
                bgSize="cover"
                style={{
                  backgroundImage:
                    "url('https://source.unsplash.com/metro-design-tour-7Y5oVd3pYus')"
                }}
              ></Box>
            </Box>

            <Box
              py={12}
              px={6}
              maxW={{
                base: "xl",
                lg: "5xl"
              }}
              w={{
                lg: "50%"
              }}
            >
              <chakra.h2
                fontSize={{
                  base: "2xl",
                  md: "3xl"
                }}
                color={"#382b28"}
                fontWeight="bold"
              >
                Build Your New Brochures
              </chakra.h2>
              <chakra.p
                mt={4}
                color="gray.600"
                _dark={{
                  color: "gray.400"
                }}
              >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem
                modi reprehenderit vitae exercitationem aliquid dolores ullam
                temporibus enim expedita aperiam mollitia iure consectetur dicta
                tenetur, porro consequuntur saepe accusantium consequatur.
              </chakra.p>

              <Box mt={8}>
                <Button
                  bgGradient="linear(to-t, #009DFF, #0078C2, #005285)"
                  color={"white"}
                  rounded={"full"}
                  px={6}
                  _hover={{
                    bgGradient: "linear(to-b, #009DFF, #0078C2, #005285)"
                  }}
                >
                  Order Now
                </Button>
              </Box>
            </Box>
          </Box>
        </HStack>
        <Box
          transition="transform 0.2s"
          _hover={{ transform: "scale(1.05)" }}
          bg="white"
          _dark={{ bg: "gray.800" }}
          mx={{ lg: 8 }}
          display={{ lg: "flex" }}
          maxW={{ lg: "5xl" }}
          shadow={{ lg: "lg" }}
          rounded={{ lg: "lg" }}
          my={{ base: 8, md: 14 }}
        >
          <Box
            w={{
              lg: "50%"
            }}
          >
            <Box
              h={{
                base: 64,
                lg: "full"
              }}
              rounded={{
                lg: "lg"
              }}
              bgSize="cover"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1593642532400-2682810df593?ixlib=rb-1.2.1&ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80')"
              }}
            ></Box>
          </Box>

          <Box
            py={12}
            px={6}
            maxW={{
              base: "xl",
              lg: "5xl"
            }}
            w={{
              lg: "50%"
            }}
          >
            <chakra.h2
              fontSize={{
                base: "2xl",
                md: "3xl"
              }}
              color={"#382b28"}
              fontWeight="bold"
            >
              Build Your New Brochures
            </chakra.h2>
            <chakra.p
              mt={4}
              color="gray.600"
              _dark={{
                color: "gray.400"
              }}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem
              modi reprehenderit vitae exercitationem aliquid dolores ullam
              temporibus enim expedita aperiam mollitia iure consectetur dicta
              tenetur, porro consequuntur saepe accusantium consequatur.
            </chakra.p>

            <Box mt={8}>
              <Button
                bgGradient="linear(to-t, #009DFF, #0078C2, #005285)"
                color={"white"}
                rounded={"full"}
                px={6}
                _hover={{
                  bgGradient: "linear(to-b, #009DFF, #0078C2, #005285)"
                }}
              >
                Order Now
              </Button>
            </Box>
          </Box>
        </Box>
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={5}
          alignItems={{ base: "flex-start", md: "center" }}
          justifyContent="space-between"
          rounded="lg"
          boxShadow="md"
          p={{ base: 8, md: 16 }}
          maxW={"50%"}
          bg="white"
        >
          <Box>
            <chakra.h1 fontSize="4xl" lineHeight={1.2} fontWeight="bold">
              Ready to get started?
            </chakra.h1>
            <chakra.h2
              fontSize="2xl"
              lineHeight={1.2}
              fontWeight="bold"
              bgGradient="linear(to-l, #0ea5e9,#2563eb)"
              bgClip="text"
            >
              Get in touch or browse our products.
            </chakra.h2>
          </Box>
          <Stack
            direction={{ base: "column", sm: "row" }}
            spacing={{ base: 0, sm: 3 }}
            w={{ base: "100%", sm: "auto" }}
          >
            <Button
              as={Link}
              href="/products"
              color="white"
              variant="solid"
              size="lg"
              rounded="md"
              mb={{ base: 2, sm: 0 }}
              lineHeight={1}
              bgGradient="linear(to-l, #0ea5e9,#2563eb)"
              _hover={{ bgGradient: "linear(to-l, #0ea5e9,#2563eb)" }}
            >
              Browse Products
            </Button>
            <Button
              as={Link}
              href="/contactus"
              size="lg"
              rounded="md"
              mb={{ base: 2, sm: 0 }}
              lineHeight={1}
            >
              Contact Us
            </Button>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
};

export default ProductCardHome;
