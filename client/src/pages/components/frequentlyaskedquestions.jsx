import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Flex,
  Text,
  Container,
  Grid,
  Box,
  Tabs,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Center,
  Spacer
} from '@chakra-ui/react'
import { ArrowRightIcon, BellIcon, PhoneIcon } from '@chakra-ui/icons'


import { ChevronDownIcon } from '@chakra-ui/icons'

export default function FrequentlyAskedQuestion() {
  return (
      <Tabs isFitted bgGradient={'linear(to-t, #383838,  #ffffff 10%, #c3d8e8)'} minH={'25vh'} fontFamily={'Staatliches'}>
        <TabList mb='1em'>
          <Tab>Excellent Customer Service</Tab>
          <Tab>Result Oriented</Tab>
          <Tab>Speedy Progress</Tab>
        </TabList>
        <TabPanels minH={"25vh"}>
          <TabPanel>
          <Grid templateColumns='repeat(2, 1fr)' gap={6}>
            <Box>
              <Center>
              <PhoneIcon w={'15%'} h={'15%'} color={'#6b4131'} />
              </Center>
            </Box>
            <Center>
            <Box color={'blackAlpha.700'} maxW='70%'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem modi
            reprehenderit vitae exercitationem aliquid dolores ullam temporibus enim
            expedita aperiam mollitia iure consectetur dicta tenetur, porro
            consequuntur saepe accusantium consequatur.
            </Box>
            </Center>
          </Grid>
          </TabPanel>
          <TabPanel>
          <Grid templateColumns='repeat(2, 1fr)' gap={6}>
            <Box>
              <Center>
              <BellIcon w={'15%'} h={'15%'} color={'blackAlpha.900'} />
              </Center>
            </Box>
            <Center>
            <Box color={'blackAlpha.700'} maxW='70%'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem modi
            reprehenderit vitae exercitationem aliquid dolores ullam temporibus enim
            expedita aperiam mollitia iure consectetur dicta tenetur, porro
            consequuntur saepe accusantium consequatur.
            </Box>
            </Center>
          </Grid>
          </TabPanel>
          <TabPanel>
          <Grid templateColumns='repeat(2, 1fr)' gap={6}>
            <Box>
              <Center>
              <ArrowRightIcon w={'15%'} h={'15%'} color={'blackAlpha.900'} />
              </Center>
            </Box>
            <Center>
            <Box color={'blackAlpha.700'} maxW='70%'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem modi
            reprehenderit vitae exercitationem aliquid dolores ullam temporibus enim
            expedita aperiam mollitia iure consectetur dicta tenetur, porro
            consequuntur saepe accusantium consequatur.
            </Box>
            </Center>
          </Grid>
          </TabPanel>
        </TabPanels>
      </Tabs>
  )
}