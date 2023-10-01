import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue,
  Description,
  chakra,
  Link

} from '@chakra-ui/react'

const productCard  = () => {
  return (
    <Flex
    bgGradient={'radial(#47B6FA, #E0F3FF, #FFFFFF)'}
      p={50}
      w="full"
      alignItems="center"
      justifyContent="center"
      >
  <Box
    bg="white"
    _dark={{bg: "gray.800"}}
    mx={{lg: 8,}}
    display={{lg: "flex"}}
    maxW={{lg: "5xl",}}
    shadow={{lg: "lg",}}
    rounded={{lg: "lg",}}
    mb={{base: 8, md: 14}}
  >
    <Box
      w={{
        lg: "50%",
      }}
    >
      <Box
        h={{
          base: 64,
          lg: "full",
        }}
        rounded={{
          lg: "lg",
        }}
        bgSize="cover"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1593642532400-2682810df593?ixlib=rb-1.2.1&ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80')",
        }}
      ></Box>
    </Box>

    <Box
      py={12}
      px={6}
      maxW={{
        base: "xl",
        lg: "5xl",
      }}
      w={{
        lg: "50%",
      }}
    >
      <chakra.h2
        fontSize={{
          base: "2xl",
          md: "3xl",
        }}
        color="gray.800"
        _dark={{
          color: "white",
        }}
        fontWeight="bold"
      >
        Build Your New Brochures
      </chakra.h2>
      <chakra.p
        mt={4}
        color="gray.600"
        _dark={{
          color: "gray.400",
        }}
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem modi
        reprehenderit vitae exercitationem aliquid dolores ullam temporibus enim
        expedita aperiam mollitia iure consectetur dicta tenetur, porro
        consequuntur saepe accusantium consequatur.
      </chakra.p>

      <Box mt={8}>
      <Button
              bgGradient="linear(to-t, #009DFF, #0078C2, #005285)"
              color={'white'}
              rounded={'full'}
              px={6}
              _hover={{
                bgGradient:"linear(to-b, #009DFF, #0078C2, #005285)",
              }}>
                Order Now
                </Button>
      </Box>
    </Box>
  </Box>
</Flex>
  )
}

export default productCard;