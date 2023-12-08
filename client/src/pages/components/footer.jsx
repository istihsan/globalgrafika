import { 
  Box,
  Stack, 
  Text, 
  Flex,
  Image,
  Link,
  HStack,
  VStack,
  Icon
 } from '@chakra-ui/react'
 import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa'

export default function footer() {
  return (
    <Box
    bgColor={'#383838'}
  _dark={{bg: "gray.600",}}
  minWidth={'100%'}
  
>
  <Stack
    direction={{
      base: "column",
      lg: "row",
    }}
    w="full"
    justify="space-between"
    p={10}
  >
    <Flex justify="center" mb={"-2"} color={'whiteAlpha.100'}>
      <Image
        src="http://placehold.jp/2a2a2c/ffffff/200x100.png?text=Company%20Logo&css=%7B%22font-size%20%22%3A%22%2016px%22%7D"
        alt="Company Logo"
        rounded="lg"
        width={{
          base: "150px",
          lg: "200px",
        }}
        height={{
          base: "75px",
          lg: "100px",
        }}
        my={{
          base: 2,
          lg: 0,
        }}
      />
    </Flex>
    <HStack
      alignItems="start"
      flex={1}
      justify="space-around"
      fontSize={{
        base: "12px",
        md: "16px",
      }}
      color="gray.800"
      _dark={{
        color: "white",
      }}
      textAlign={{
        base: "center",
        md: "left",
      }}
    >
      <Flex justify="start" direction="column" color={'whiteAlpha.700'}>
        <Link textTransform="uppercase" href='/'>Home</Link>
        <Link textTransform="uppercase" href='/products'>Products</Link>
      </Flex>
      <Flex justify="start" direction="column" color={'whiteAlpha.700'}>
        <Link textTransform="uppercase" href='/faq'>FAQ</Link>
        <Link textTransform="uppercase" href='/contactform'>Contact Us</Link>
      </Flex>
    </HStack>
    <HStack
      alignItems="start"
      flex={1}
      justify="space-around"
      fontSize={{
        base: "12px",
        md: "16px",
      }}
      color="gray.800"
      _dark={{
        color: "white",
      }}
      textAlign={{
        base: "center",
        md: "left",
      }}
    >
      <Flex justify="start" direction="column" color={'whiteAlpha.700'}>
        <Link textTransform="uppercase" href='/brochures'>Brochures</Link>
        <Link textTransform="uppercase" href='/banners'>Banners</Link>
        <Link textTransform="uppercase" href='/signage'>Signage</Link>
      </Flex>
      <Flex justify="start" direction="column" color={'whiteAlpha.700'}>
        <Link textTransform="uppercase" href='/aboutus'>About Us</Link>
        <Link textTransform="uppercase" href='/portofolio'>Portofolio Showcase</Link>
        <Link textTransform="uppercase" href='/testimonials'>Testimonials</Link>
      </Flex>
    </HStack>
  </Stack>
  <VStack py={3}>
    <HStack justify="center">
      <Link>
        <Icon
          color={'whiteAlpha.700'}
          _dark={{
            color: "white",
          }}
          h="20px"
          w="20px"
          as={FaFacebookF}
        />
      </Link>
      <Link>
        <Icon
          color={'whiteAlpha.700'}
          _dark={{
            color: "white",
          }}
          h="20px"
          w="20px"
          as={FaTwitter}
        />
      </Link>
      <Link>
        <Icon
          color={'whiteAlpha.700'}
          _dark={{
            color: "white",
          }}
          h="20px"
          w="20px"
          as={FaInstagram}
        />
      </Link>
      <Link>
        <Icon
          color={'whiteAlpha.700'}
          _dark={{
            color: "white",
          }}
          h="20px"
          w="20px"
          as={FaLinkedinIn}
        />
      </Link>
    </HStack>

    <Text
      textAlign="center"
      fontSize="smaller"
      color={'whiteAlpha.700'}
      _dark={{
        color: "white",
      }}
    >
      &copy;Copyright. All rights reserved.
    </Text>
  </VStack>
</Box>
  )
}