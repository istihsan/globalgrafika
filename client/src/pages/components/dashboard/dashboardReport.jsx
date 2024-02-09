import React, { useState, useEffect } from "react";
import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Center,
  Select,
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { get } from "../../../utils/request";
import currencyFormatter from "../../../hooks/useCurrencyFormatter";

const DashboardReport = () => {
  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [sortBy, setSortBy] = useState("createdAt");
  const [sortOrder, setSortOrder] = useState("desc");

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const orders = await get("api/orders/");
        setOrders(orders);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, []);

  useEffect(() => {
    const currentDate = new Date();
    const oneWeekAgo = new Date(
      currentDate.getTime() - 7 * 24 * 60 * 60 * 1000
    );

    const filtered = orders.filter(order => {
      const orderDate = new Date(order.createdAt);
      return orderDate >= oneWeekAgo && orderDate <= currentDate;
    });

    const sorted = filtered.sort((a, b) => {
      if (sortBy === "createdAt") {
        // Sort by date
        return sortOrder === "asc"
          ? new Date(a.createdAt) - new Date(b.createdAt)
          : new Date(b.createdAt) - new Date(a.createdAt);
      } else if (sortBy === "totalOrder") {
        // Sort by total order
        return sortOrder === "asc"
          ? a.totalOrder - b.totalOrder
          : b.totalOrder - a.totalOrder;
      }
      return 0;
    });

    setFilteredOrders(sorted);
  }, [orders, sortBy, sortOrder]);

  const handleSort = field => {
    if (sortBy === field) {
      // Toggle the sort order if clicking on the same field
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      // Set a new field for sorting
      setSortBy(field);
      setSortOrder("asc");
    }
  };

  return (
    <Center>
      <Box
        p={4}
        borderWidth="2px"
        borderRadius="md"
        minH="20vh"
        minW={"69%"}
        bgColor={"white"}
        boxShadow={"xl"}
      >
        <Box mb={4}>
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              Sort By
            </MenuButton>
            <MenuList>
              <MenuItem onClick={() => handleSort("createdAt")}>
                Time Created
              </MenuItem>
              <MenuItem onClick={() => handleSort("totalOrder")}>
                Total Price
              </MenuItem>
            </MenuList>
          </Menu>
          <Button ml={2} onClick={() => handleSort(sortBy)}>
            {sortOrder === "asc" ? "Ascending" : "Descending"}
          </Button>
        </Box>
        <Table variant="simple" size="sm" colorScheme="teal">
          <Thead>
            <Tr>
              <Th>Total Order</Th>
              <Th>Customer Name</Th>
              <Th>Order Item</Th>
            </Tr>
          </Thead>
          <Tbody>
            {filteredOrders.map(order => (
              <Tr key={order._id}>
                <Td>{currencyFormatter(order.totalOrder)}</Td>
                <Td>{order.customerName}</Td>
                <Td>
                  {order.orderItem.map(item => (
                    <p key={item._id}>
                      {item.title} ({item.productVariant})
                    </p>
                  ))}
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Center>
  );
};

export default DashboardReport;
