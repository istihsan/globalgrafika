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
              We pride ourselves on delivering unrivaled quality in every
              brochure, signage, and print product we create. Our cutting-edge
              digital printing technology ensures sharp, vibrant, and
              true-to-life reproductions that captivate and leave a lasting
              impression.
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
              Our skilled designers, meticulous craftsmen, and dedicated
              customer service representatives work in harmony to transform your
              vision into a masterpiece. When you choose our digital printing
              store, you're not just purchasing products; you're investing in a
              commitment to excellence and the assurance that your print
              materials will stand out in terms of quality and professionalism.
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
