import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Flex,
  useColorModeValue,
  Text,
  Container,
} from '@chakra-ui/react'

import { ChevronDownIcon } from '@chakra-ui/icons'

export default function FrequentlyAskedQuestion() {
  return (
    <Flex
      minH={'25vh'}
      p={5}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Container>
        <Accordion allowMultiple width="100%" maxW="lg" rounded="lg">
          <AccordionItem>
            <AccordionButton
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}>
              <Text fontSize="md">Lorem Ipsum ?</Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="gray.600">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem modi
          reprehenderit vitae exercitationem aliquid dolores ullam temporibus enim
          expedita aperiam mollitia iure consectetur dicta tenetur, porro
          consequuntur saepe accusantium consequatur.
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}>
              <Text fontSize="md">Lorem Ipsum ?</Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="gray.600">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem modi
          reprehenderit vitae exercitationem aliquid dolores ullam temporibus enim
          expedita aperiam mollitia iure consectetur dicta tenetur, porro
          consequuntur saepe accusantium consequatur.
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}>
              <Text fontSize="md">Lorem Ipsum ?</Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="gray.600">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem modi
          reprehenderit vitae exercitationem aliquid dolores ullam temporibus enim
          expedita aperiam mollitia iure consectetur dicta tenetur, porro
          consequuntur saepe accusantium consequatur.
              </Text>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Container>
    </Flex>
  )
}