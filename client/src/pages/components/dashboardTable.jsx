import React from 'react';
import {
  Box,
  Heading,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  HStack,
  TableCaption,
  IconButton,
  Center,
  Button,
  Spacer,
  Flex,
  FormControl,
  FormLabel,
  Input,
  ModalFooter,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  useDisclosure
} from '@chakra-ui/react';
import { EditIcon, DeleteIcon, ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

const DashboardTable = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
  return (
    <Center>
        <Box p={4} borderWidth="2px" borderRadius="md" minW={'69%'} bgColor={'white'} boxShadow={'xl'} >
        <Flex>
        <Heading mb={4} fontSize="xl">Riwayat Penjualan
        </Heading>
        <Spacer/>
        <Button colorScheme='green' onClick={onOpen}>Add New Order</Button>
        </Flex>
        
        <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Nama Produk</FormLabel>
              <Input ref={initialRef} placeholder='Banner' />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Deskripsi Produk</FormLabel>
              <Input placeholder='Banner sangat besar' />
            </FormControl>
            <FormControl>
              <FormLabel>Harga Produk</FormLabel>
              <Input placeholder='250.000' />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Jumlah Stok</FormLabel>
              <Input placeholder='10.000' />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

        <Text mb={4}>
            Lihat, Bandingkan, Ulas Kembali, Edit, atau Hapus
        </Text>
        <Table variant="striped">
            <Thead bgColor={'#E5E5E5'}>
            <Tr>
                <Th>Invoice Number</Th>
                <Th>Product Name</Th>
                <Th>Total Price</Th>
                <Th>Edit/Delete</Th>
            </Tr>
            </Thead>
            <Tbody>
            <Tr>
                <Td>001</Td>
                <Td>Product A</Td>
                <Td>$100</Td>
                <Td>
                <IconButton
                    colorScheme="blue"
                    aria-label="Edit"
                    icon={<EditIcon />}
                    mr={2}
                />
                <IconButton
                    colorScheme="red"
                    aria-label="Delete"
                    icon={<DeleteIcon />}
                />
                </Td>
            </Tr>
            <Tr>
                <Td>001</Td>
                <Td>Product A</Td>
                <Td>$100</Td>
                <Td>
                <IconButton
                    colorScheme="blue"
                    aria-label="Edit"
                    icon={<EditIcon />}
                    mr={2}
                />
                <IconButton
                    colorScheme="red"
                    aria-label="Delete"
                    icon={<DeleteIcon />}
                />
                </Td>
            </Tr>
            <Tr>
                <Td>001</Td>
                <Td>Product A</Td>
                <Td>$100</Td>
                <Td>
                <IconButton
                    colorScheme="blue"
                    aria-label="Edit"
                    icon={<EditIcon />}
                    mr={2}
                />
                <IconButton
                    colorScheme="red"
                    aria-label="Delete"
                    icon={<DeleteIcon />}
                />
                </Td>
            </Tr>
            <Tr>
                <Td>001</Td>
                <Td>Product A</Td>
                <Td>$100</Td>
                <Td>
                <IconButton
                    colorScheme="blue"
                    aria-label="Edit"
                    icon={<EditIcon />}
                    mr={2}
                />
                <IconButton
                    colorScheme="red"
                    aria-label="Delete"
                    icon={<DeleteIcon />}
                />
                </Td>
            </Tr>
            </Tbody>
            <TableCaption>
                <Center>
                    <HStack>
                            <IconButton colorScheme="blue" aria-label="Previous Page" icon={<ChevronLeftIcon />} />
                            <Text mx={5}>Page 1 of 5</Text>
                            <IconButton colorScheme="blue" aria-label="Next Page" icon={<ChevronRightIcon />} />
                    </HStack>
                </Center>
            </TableCaption>
        </Table>
        </Box>
    </Center>
  );
};

export default DashboardTable;
