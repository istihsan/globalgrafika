import {
  Box,
  Heading,
  Container,
  Button,
  Stack,
  Center,
  Flex,
  Link,
} from '@chakra-ui/react'
import '@fontsource/staatliches';
import '@fontsource-variable/playfair';
import NavBar from './navbar';


export default function Hero() {
  return (
      <Container maxW={'100%'} bgGradient={'radial(#47B6FA, #E0F3FF, #FFFFFF)'} zIndex={'-9999'}>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          pb={{base: 8, md: 14}}
          px={{base: 8, md: 14}}>
          <NavBar />
          <Heading
            fontFamily={'Staatliches'}
            fontWeight={200}
            fontSize={{ base: '6xl', sm: '4xl', md: '9xl' }}
            letterSpacing={'0.125em'}
            lineHeight={'110%'}>
            PRINT YOUR SUCCESS <br />
          </Heading>
          <Flex>
            <Center color={'#291720'} w={''} fontFamily={'Playfair'} fontSize={{ base: 'lg', sm: 'md', md: 'lg' }}>
            Welcome to Global Grafika, your one-stop solution for all your B2B digital printing needs. 
            With a focus on brochures, banners, and business cards, 
            we cater to businesses that understand the importance of top-quality printing.
          </Center>
          </Flex>
          <Stack
            direction={'column'}
            spacing={3}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}>
            <Link href='/products'>
              <Button
                bgGradient="linear(to-t, #009DFF, #0078C2, #005285)"
                color={'white'}
                rounded={'full'}
                px={6}
                _hover={{
                  bgGradient:"linear(to-b, #009DFF, #0078C2, #005285)",
                }}>
                Browse Products
              </Button>
            </Link>
            <Button color={'white'} variant={'link'} size={'sm'}>
              Learn more
            </Button>
          </Stack>
        </Stack>
      </Container>
  )
}