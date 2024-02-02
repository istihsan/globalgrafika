import React, { useEffect, useState } from "react";
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
  Flex,
  Link
} from "@chakra-ui/react";
import {
  EditIcon,
  DeleteIcon,
  ChevronLeftIcon,
  ChevronRightIcon
} from "@chakra-ui/icons";
import { get } from "../../../utils/request";

const DashboardTableOrder = () => {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      setIsLoading(true);
      try {
        const order = await get("/api/orders");
        setOrders(order);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchOrders();
  }, []);
  console.log(orders);
  console.log("==============");
  const formatCurrency = amount => {
    const formatter = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR"
    });

    return formatter.format(amount);
  };

  return (
    <Center>
      <Box
        p={4}
        borderWidth="2px"
        borderRadius="md"
        minW={"69%"}
        bgColor={"white"}
        boxShadow={"xl"}
      >
        <Flex>
          <Heading mb={4} fontSize="xl">
            Riwayat Penjualan
          </Heading>
        </Flex>

        <Text mb={4}>Lihat, Bandingkan, Ulas Kembali, Edit, atau Hapus</Text>

        <Table variant="striped">
          <Thead bgColor={"#E5E5E5"}>
            <Tr>
              <Th>Nama Pembeli</Th>
              <Th>Total Harga</Th>
              <Th>List Pesanan</Th>
              <Th>Edit/Delete</Th>
            </Tr>
          </Thead>
          <Tbody>
            {isLoading && (
              <Tr>
                <Td colSpan={4}>Loading products...</Td>
              </Tr>
            )}
            {error && (
              <Tr>
                <Td colSpan={4}>Error: {error.message}</Td>
              </Tr>
            )}
            {orders.map(order => (
              <Tr key={order.customerName}>
                <Td>{order.customerName}</Td>
                <Td>{formatCurrency(order.totalOrder)}</Td>
                <Td>
                  {order.orderItem.map(item => (
                    <div key={item._id}>
                      {item.title} - {item.quantity} {item.unit}
                    </div>
                  ))}
                </Td>
                <Td>
                  <IconButton
                    as={Link}
                    href={`/dashboard/detailproduct/${order._id.toString()}`}
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
            ))}
          </Tbody>
          <TableCaption>
            <Center>
              <HStack>
                <IconButton
                  colorScheme="blue"
                  aria-label="Previous Page"
                  icon={<ChevronLeftIcon />}
                />
                <Text mx={5}>Page 1 of 5</Text>
                <IconButton
                  colorScheme="blue"
                  aria-label="Next Page"
                  icon={<ChevronRightIcon />}
                />
              </HStack>
            </Center>
          </TableCaption>
        </Table>
      </Box>
    </Center>
  );
};

export default DashboardTableOrder;
