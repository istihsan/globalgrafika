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
} from '@chakra-ui/react';
import { EditIcon, DeleteIcon, ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

const DashboardTable = () => {
  return (
    <Center>
        <Box p={4} borderWidth="2px" borderRadius="md" minW={'69%'} bgColor={'white'} boxShadow={'xl'} >
        <Heading mb={4} fontSize="xl">
            Riwayat Penjualan
        </Heading>

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
