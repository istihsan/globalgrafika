import { Box, Heading, Text, Button, Link } from '@chakra-ui/react'
import NavBar from './components/navbar'
import Footer from './components/footer'

export default function NotFound() {
  return (
    <>
    <NavBar />
    <Box textAlign="center" py={10} px={6} minH="60vh">
      <Heading
        display="inline-block"
        as="h2"
        size="2xl"
        bgGradient="linear(to-t, #009DFF, #0078C2, #005285)"
        backgroundClip="text">
        404
      </Heading>
      <Text fontSize="2xl" mt={3} mb={2}>
        Page Not Found
      </Text>
      <Text color={'gray.500'} mb={6}>
        The page you&apos;re looking for does not seem to exist
      </Text>
    <Link href='/'>
      <Button
        colorScheme="teal"
        bgGradient="linear(to-b, #009DFF, #0078C2, #005285)"
        color="white"
        variant="solid">
        Go to Home
      </Button>
    </Link>
    </Box>
    <Footer mt="100vh"/>
    </>
  )
}