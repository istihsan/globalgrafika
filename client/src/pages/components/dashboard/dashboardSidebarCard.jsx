import {
    Box,
    Container,
    Flex,
    Heading,
    Icon,
    Stack,
    Text,
    useDisclosure,
    Slide,
    SimpleGrid,
  } from '@chakra-ui/react'
  import { ReactElement } from 'react'
  import {
    FcAbout,
    FcAssistant,
    FcCollaboration,
    FcDonate,
    FcManager,
  } from 'react-icons/fc'
  
  interface CardProps {
    heading: string[];
    description: string[];
    icon: ReactElement[];
    href: string[];
  }
  
  
  const Card = ({ heading, description, icon, href, slideDesc }: CardProps) => {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Box
        bg={"#edf3f8"}
        maxW={{ base: 'full', md: '275px' }}
        w={'full'}
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        p={8}
        onMouseEnter={onToggle}
        onMouseLeave={onToggle}
        transform="scale(1)"
        transition={'transform 0.3s ease-in-out'}
        _hover={{
          cursor: 'pointer',
          backgroundColor: '#dce6f3',
          transform: 'scale(1.1)'
        }}
      >
        <Stack align={'start'} spacing={2}>
          <Flex
            w={16}
            h={16}
            align={'center'}
            justify={'center'}
            color={'white'}
            rounded={'full'}
          >
            {icon}
          </Flex>
          <Box mt={2}>
            <Heading size="md">{heading}</Heading>
            <Text mt={1} fontSize={'sm'}>
              {description}
            </Text>
          </Box>
        </Stack>
        <Slide direction='bottom' in={isOpen} style={{ zIndex: 10 }}>
          <Box
            p='40px'
            color='white'
            mt='4'
            bg='#0078C2'
            rounded='md'
            shadow='md'
          >
          <Text>{slideDesc}</Text>
          </Box>
        </Slide>
      </Box>
    );
  };
  
  
  export default function WhyUs() {
      const {onToggle} = useDisclosure();
      return (
      <Box p={4}>  
        <Container maxW={'5xl'} mt={12} >
          <Flex flexWrap="wrap" gridGap={6} justify="center">
            <SimpleGrid spacing={4} columns={4} templateColumns='repeat(2, 1fr)'> 
            <Card
              heading={'Heading'}
              icon={<Icon as={FcAssistant} w={10} h={10} />}
              description={'Lorem ipsum dolor sit amet catetur, adipisicing elit.'}
              href={'#'}
              onToggle={onToggle}
              slideDesc={'A Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis obcaecati ut cupiditate.'}
            />
            <Card
              heading={'Heading'}
              icon={<Icon as={FcCollaboration} w={10} h={10} />}
              description={'Lorem ipsum dolor sit amet catetur, adipisicing elit.'}
              href={'#'}
              onToggle={onToggle}
              slideDesc={'B Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis obcaecati ut cupiditate.'}
            />
            <Card
              heading={'Heading'}
              icon={<Icon as={FcDonate} w={10} h={10} />}
              description={'Lorem ipsum dolor sit amet catetur, adipisicing elit.'}
              href={'#'}
              onToggle={onToggle}
              slideDesc={'C Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis obcaecati ut cupiditate.'}
            />
            <Card
              heading={'Heading'}
              icon={<Icon as={FcManager} w={10} h={10} />}
              description={'Lorem ipsum dolor sit amet catetur, adipisicing elit.'}
              href={'#'}
              onToggle={onToggle}
              slideDesc={'D Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis obcaecati ut cupiditate.'}
            />
            <Card
              heading={'Heading'}
              icon={<Icon as={FcAbout} w={10} h={10} />}
              description={'Lorem ipsum dolor sit amet catetur, adipisicing elit.'}
              href={'#'}
              onToggle={onToggle}
              slideDesc={'E Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis obcaecati ut cupiditate.'}
            />
            </SimpleGrid>
          </Flex>
        </Container>
      </Box>
    )
  }