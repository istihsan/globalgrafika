import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { get } from "../utils/request";
import {
  Flex,
  Box,
  chakra,
  HStack,
  Card,
  VStack,
  Icon,
  Grid,
  GridItem,
  Button,
  Center,
  Tag,
  Link
} from "@chakra-ui/react";
import {
  MdHeadset,
  MdLocationOn,
  MdEmail,
  MdLocalPhone,
  MdAlarm
} from "react-icons/md";
import NavBar from "./components/common/navbar";
import Footer from "./components/common/footer";

const Invoice = () => {
  const [order, setOrder] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const params = useParams();

  useEffect(() => {
    const fetchOrder = async () => {
      setIsLoading(true);
      try {
        const fetchedOrder = await get(`/api/orders/${params.id}`);
        setOrder(fetchedOrder);
        console.log(fetchedOrder);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchOrder();
  }, []);
  return (
    <>
      <NavBar />
      <Center>
        <Tag
          mt={3}
          color="black"
          fontWeight="bold"
          size="lg"
          fontSize="lg"
          textTransform={"uppercase"}
          variant={"subtle"}
          colorScheme="blue"
        >
          Your Order Number: {order._id}
        </Tag>
      </Center>
      <Flex alignItems="center" justifyContent="center" minHeight="61vh">
        <Box minW="100%">
          <Grid templateColumns="repeat(3, 1fr)">
            <GridItem colSpan={2}>
              <VStack spacing={4} align="stretch" p={4}>
                {isLoading && <p>Loading...</p>}
                {error && <p>Error: {error.message}</p>}
                {order && Object.keys(order).length > 0 && order.orderItem ? (
                  <VStack align="stretch">
                    {order.orderItem.map(orderItem => (
                      <Card key={orderItem._id} minW="50%" my={3}>
                        <Flex pr={4} w="50%">
                          <Box
                            w={1 / 3}
                            bgSize="inherit"
                            style={{
                              backgroundImage: `url(${orderItem.productImageUrl})`,
                              backgroundSize: "cover",
                              backgroundRepeat: "no-repeat",
                              backgroundPosition: "center"
                            }}
                          ></Box>
                          <Box w={2 / 3} p={{ base: 4, md: 4 }}>
                            <chakra.h1
                              fontSize="2xl"
                              fontWeight="bold"
                              color="gray.800"
                              _dark={{
                                color: "white"
                              }}
                            >
                              {orderItem.title}
                            </chakra.h1>
                            <chakra.p
                              mt={2}
                              fontSize="sm"
                              color="gray.600"
                              _dark={{
                                color: "gray.400"
                              }}
                            >
                              Quantity: {orderItem.quantity} {orderItem.unit}
                            </chakra.p>
                            <chakra.p
                              mt={2}
                              fontSize="sm"
                              color="gray.600"
                              _dark={{
                                color: "gray.400"
                              }}
                            >
                              Product Variant: {orderItem.productVariant}
                            </chakra.p>
                            {orderItem.customerNotes ? (
                              <chakra.p
                                mt={2}
                                fontSize="sm"
                                color="gray.600"
                                _dark={{
                                  color: "gray.400"
                                }}
                              >
                                Notes: {orderItem.customerNotes}
                              </chakra.p>
                            ) : (
                              ""
                            )}
                          </Box>
                        </Flex>
                      </Card>
                    ))}
                  </VStack>
                ) : (
                  <p>No order items found.</p>
                )}
              </VStack>
            </GridItem>
            <GridItem colSpan={1}>
              <Flex p={4} w="full" alignItems="center" justifyContent="center">
                <Box
                  w="sm"
                  mx="auto"
                  bg="white"
                  _dark={{
                    bg: "gray.800"
                  }}
                  shadow="lg"
                  rounded="lg"
                  overflow="hidden"
                >
                  <Flex alignItems="center" px={6} py={3} bg="gray.900">
                    <Icon as={MdAlarm} h={6} w={6} color="white" />

                    <chakra.h1
                      mx={3}
                      color="white"
                      fontWeight="bold"
                      fontSize="lg"
                    >
                      {order.orderStatus}
                    </chakra.h1>
                  </Flex>

                  <Box py={4} px={6}>
                    <chakra.h1
                      fontSize="xl"
                      fontWeight="bold"
                      color="gray.800"
                      _dark={{
                        color: "white"
                      }}
                    >
                      {order.customerName}
                    </chakra.h1>

                    <Flex
                      alignItems="center"
                      mt={4}
                      color="gray.700"
                      _dark={{
                        color: "gray.200"
                      }}
                    >
                      <Icon as={MdLocalPhone} h={6} w={6} mr={2} />

                      <chakra.h1 px={2} fontSize="sm">
                        {order.customerPhoneNum}
                      </chakra.h1>
                    </Flex>

                    <Flex
                      alignItems="center"
                      mt={4}
                      color="gray.700"
                      _dark={{
                        color: "gray.200"
                      }}
                    >
                      <Icon as={MdLocationOn} h={6} w={6} mr={2} />

                      <chakra.h1 px={2} fontSize="sm">
                        {order.customerAddress}
                      </chakra.h1>
                    </Flex>
                    <Flex
                      alignItems="center"
                      mt={4}
                      color="gray.700"
                      _dark={{
                        color: "gray.200"
                      }}
                    >
                      <Icon as={MdEmail} h={6} w={6} mr={2} />

                      <chakra.h1 px={2} fontSize="sm">
                        {order.customerEmailAddress}
                      </chakra.h1>
                    </Flex>
                  </Box>
                </Box>
              </Flex>
              <Center>
                <Button
                  as={Link}
                  href="/contactus"
                  colorScheme="blue"
                  variant="outline"
                >
                  Contact Us
                </Button>
              </Center>
            </GridItem>
          </Grid>
        </Box>
      </Flex>

      <Footer />
    </>
  );
};
export default Invoice;
