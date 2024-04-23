import {
  Flex,
  Heading,
  Card,
  CardHeader,
  CardBody,
  Text,
  SimpleGrid,
  Box,
  VStack,
  Divider
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { get } from "../../../utils/request";
import currencyFormatter from "../../../hooks/useCurrencyFormatter";
import "@fontsource/staatliches";

export default function DashboardStats() {
  const [statistics, setStatistics] = useState({
    totalOrders: 0,
    totalProducts: 0,
    totalPrice: 0,
    mostSoldProduct: null
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [ordersData, productsData] = await Promise.all([
          get("/api/orders"),
          get("/api/products")
        ]);

        const totalOrders = ordersData.length;
        const totalProducts = productsData.length;

        const totalRevenue = ordersData.reduce(
          (acc, order) => acc + order.totalOrder,
          0
        );

        const productCount = {};

        ordersData.forEach(order => {
          order.orderItem.forEach(item => {
            const { title } = item;
            productCount[title] = (productCount[title] || 0) + 1;
          });
        });

        console.log("Product Count:", productCount);

        const mostSoldProduct = Object.keys(productCount).reduce(
          (mostSold, productName) =>
            productCount[productName] > productCount[mostSold]
              ? productName
              : mostSold,
          Object.keys(productCount)[0] || ""
        );

        console.log("Most Sold Product:", mostSoldProduct);

        setStatistics({
          totalOrders,
          totalProducts,
          totalRevenue,
          mostSoldProduct
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <Flex justify={"center"} align={"center"} minW={"100%"} my={"1.5%"}>
      <VStack>
        <Heading fontFamily={"Staatliches"} letterSpacing={"10px"} mt={"1%"}>
          Dashboard
        </Heading>
        <Divider
          mb={5}
          maxW={"85%"}
          mx={"auto"}
          borderColor={"blackAlpha.400"}
        />
        <Box minW={"100%"} mt={"2%"} justify={"center"} align={"center"}>
          <SimpleGrid
            minW={"90%"}
            spacing={4}
            columns={4}
            templateColumns="repeat(4, 1fr)"
          >
            <Card>
              <CardHeader>
                <Heading size="md">Total Orders</Heading>
              </CardHeader>
              <CardBody>
                <cah>{statistics.totalOrders}</cah>
              </CardBody>
            </Card>
            <Card>
              <CardHeader>
                <Heading size="md">Total Products</Heading>
              </CardHeader>
              <CardBody>
                <Text>{statistics.totalProducts}</Text>
              </CardBody>
            </Card>
            <Card>
              <CardHeader>
                <Heading size="md">Total Revenue</Heading>
              </CardHeader>
              <CardBody>
                <Text textStyle="sm" color="fg.muted">
                  {currencyFormatter(statistics.totalRevenue)}
                </Text>
              </CardBody>
            </Card>
            <Card>
              <CardHeader>
                <Heading size="md">Most Sold Product</Heading>
              </CardHeader>
              <CardBody>
                <Text>{statistics.mostSoldProduct}</Text>
              </CardBody>
            </Card>
          </SimpleGrid>
        </Box>
      </VStack>
    </Flex>
  );
}
