import React from 'react';
import {
  Link,
  Box,
  Flex,
  Button,
  Heading,
  Spacer,
} from '@chakra-ui/react';
import '@fontsource/bebas-neue'
import '@fontsource/press-start-2p'
import '@fontsource/syne-mono'

const NavBarHero = () =>{
  return(
    <Flex minWidth='max-content' alignItems='center' gap='2'>
      <Box p='2' mt='1%'>
        <Link href='/'>
        <Heading size='xl' bgClip={'text'} bgGradient={'linear(to-r, #121212, #242424, #4a4a4a, #696969, #969493, #c9c8c7 )'} fontFamily= {'Bebas Neue'}>Global Grafika</Heading>
        </Link>
      </Box>
      <Spacer />
        <Link href='/aboutus' pe='4' pt='4'color={'blackAlpha.700'}>About Us</Link>
        <Link href='/products' pe='4' pt='4'color={'blackAlpha.700'}>Products</Link>
        <Link href='/dashboard' pe='4' pt='4'color={'blackAlpha.700'}>F.A.Q</Link>
        <Button
            mt={'1%'}
            p={'4'}
            size="sm"
            rounded="md"
            color={['white']}
            bg={['black']}
            _hover={{
              bg: 'white',
              color: 'black',
            }}
          >
            Contact Us!
          </Button> 
    </Flex>
  )
}

export default NavBarHero;
