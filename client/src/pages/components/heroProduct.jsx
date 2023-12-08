import {
  Box,
  Heading,
  Container,
  Button,
  Stack,
} from '@chakra-ui/react'
import '@fontsource/staatliches';
import '@fontsource-variable/playfair';
import BackgroundHero from '../../images/white-abstract-background-with-hexagon-pattern-style-seamless-concept_7505-1703.avif'
import NavBarHero from './navbarHero';


export default function HeroProduct() {
  return (
      <Container maxW={'100%'} bgGradient={'radial(#6497b1 10%, #b3cde0, #FFFFFF)'}>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          pb={{base: 8, md: 14}}
          px={{base: 8, md: 14}}>
            <NavBarHero />
          <Heading
            bgImage={`linear(to-t, rgba(0,0,0,0), rgba(0,0,0,0.5)), url(${BackgroundHero})`}
            bgClip={'text'}
            fontFamily={'Staatliches'}
            fontWeight={200}
            fontSize={{ base: '6xl', sm: '4xl', md: '9xl' }}
            letterSpacing={'0.125em'}
            lineHeight={'110%'}>
            WHAT WE HAVE TO OFFER <br />
          </Heading>
          <Stack
            direction={'column'}
            spacing={3}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}>
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
            <Button color={'white'} variant={'link'} size={'sm'}>
              Learn more
            </Button>
          </Stack>
        </Stack>
      </Container>
  )
}