import { SimpleGrid, Box, Flex, Image, chakra } from "@chakra-ui/react";

const SellingPoint = () => {
  return (
    <Flex p={20} w="full" justifyContent="center" alignItems="center">
      <Box px={8} py={20} mx="auto">
        <SimpleGrid
          alignItems="start"
          columns={{
            base: 1,
            md: 2
          }}
          mb={24}
          spacingY={{
            base: 10,
            md: 32
          }}
          spacingX={{
            base: 10,
            md: 24
          }}
        >
          <Box>
            <chakra.h2
              mb={4}
              fontSize={{
                base: "2xl",
                md: "4xl"
              }}
              fontWeight="extrabold"
              letterSpacing="tight"
              textAlign={{
                base: "center",
                md: "left"
              }}
              color="gray.900"
              _dark={{
                color: "gray.400"
              }}
              lineHeight={{
                md: "shorter"
              }}
            >
              Superior Quality
            </chakra.h2>
            <chakra.p
              mb={5}
              textAlign={{
                base: "center",
                sm: "left"
              }}
              color="gray.600"
              _dark={{
                color: "gray.400"
              }}
              fontSize={{
                md: "lg"
              }}
            >
              Handle your subscriptions and transactions efficiently with the
              clear overview in Dashboard. Features like the smart search option
              allow you to quickly find any data you’re looking for.
            </chakra.p>
          </Box>
          <Image
            rounded={"md"}
            alt={"product image"}
            src={
              "https://images.unsplash.com/photo-1666251957283-cbad2a95c2db?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            fit={"cover"}
            align={"center"}
            w={"100%"}
            h={{ base: "100%", sm: "400px", lg: "500px" }}
          />
        </SimpleGrid>
        <SimpleGrid
          alignItems="center"
          columns={{
            base: 1,
            md: 2
          }}
          flexDirection="column-reverse"
          mb={24}
          spacingY={{
            base: 10,
            md: 32
          }}
          spacingX={{
            base: 10,
            md: 24
          }}
        >
          <Box
            order={{
              base: "initial",
              md: 2
            }}
          >
            <chakra.h2
              mb={4}
              fontSize={{
                base: "2xl",
                md: "4xl"
              }}
              fontWeight="extrabold"
              letterSpacing="tight"
              textAlign={{
                base: "center",
                md: "left"
              }}
              color="gray.900"
              _dark={{
                color: "gray.400"
              }}
              lineHeight={{
                md: "shorter"
              }}
            >
              Finest Professionals
            </chakra.h2>
            <chakra.p
              mb={5}
              textAlign={{
                base: "center",
                sm: "left"
              }}
              color="gray.600"
              _dark={{
                color: "gray.400"
              }}
              fontSize={{
                md: "lg"
              }}
            >
              Love to code? Next to our ready-made and free plugins you can use
              our expansive yet simple API; decide how you integrate Payments
              and build advanced and reliable products yourself from scratch.
            </chakra.p>
          </Box>
          <Image
            rounded={"md"}
            alt={"product image"}
            src={
              "https://images.unsplash.com/photo-1425421669292-0c3da3b8f529?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            fit={"cover"}
            align={"center"}
            w={"100%"}
            h={{ base: "100%", sm: "400px", lg: "500px" }}
          />
        </SimpleGrid>
      </Box>
    </Flex>
  );
};

export default SellingPoint;
