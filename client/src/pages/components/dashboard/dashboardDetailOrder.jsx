import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { get, patch } from "../../../utils/request";
import {
  Flex,
  Box,
  chakra,
  Card,
  VStack,
  Icon,
  Grid,
  GridItem,
  Button,
  Center,
  Tag,
  Select,
  Spacer,
  Input,
  Text
} from "@chakra-ui/react";
import {
  MdLocationOn,
  MdEmail,
  MdLocalPhone,
  MdAlarm,
  MdDoNotDisturbAlt
} from "react-icons/md";
import { useToast } from "../../../hooks/useToast";
import DashboardNav from "./dashboardNav";
import DashboardStats from "./dashboardStats";

const Invoice = () => {
  const [order, setOrder] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState("");
  const [cancellationReason, setCancellationReason] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const params = useParams();
  const { successToast } = useToast();

  useEffect(() => {
    const fetchOrder = async () => {
      setIsLoading(true);
      try {
        const fetchedOrder = await get(`/api/orders/${params.id}`);
        setOrder(fetchedOrder);
        setSelectedStatus(fetchedOrder.orderStatus || "");
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchOrder();
  }, [params.id]);

  const handleStatusChange = event => {
    setSelectedStatus(event.target.value);
  };

  const handleCancellationReasonChange = event => {
    setCancellationReason(event.target.value);
  };

  const handleTextClick = () => {
    setIsEditing(true);
  };

  const handleInputBlur = () => {
    setIsEditing(false);
  };

  const handleSaveChanges = async () => {
    try {
      await patch(`/api/orders/${params.id}`, {
        orderStatus: selectedStatus,
        cancellationReason: cancellationReason
      });
      const updatedOrder = await get(`/api/orders/${params.id}`);
      successToast("Pesanan Berhasil di Update");
      setOrder(updatedOrder);
    } catch (error) {
      console.error("Error updating order status", error);
    }
  };
  return (
    <>
      <DashboardNav />
      <DashboardStats />
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
          Order Number: {order._id}
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
                        <Flex pr={4} w="100%">
                          <Box
                            minW="20%"
                            bgSize="inherit"
                            style={{
                              backgroundImage: `url(${orderItem.productImageUrl})`,
                              backgroundSize: "cover",
                              backgroundRepeat: "no-repeat",
                              backgroundPosition: "center"
                            }}
                          ></Box>
                          <Box maxW="40%" p={{ base: 4, md: 4 }}>
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
                          <Spacer />
                          {orderItem.referenceFile ? (
                            <Box
                              maxH="100%"
                              minW="20%"
                              borderRadius="lg"
                              p={4}
                              style={{
                                backgroundImage: `url(${orderItem.referenceFile})`,
                                backgroundSize: "contain",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center"
                              }}
                            />
                          ) : (
                            ""
                          )}
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
                    <Select
                      variant="filled"
                      focusBorderColor="gray.900"
                      bg="gray.900"
                      sx={{
                        "> option": {
                          background: "black",
                          color: "white"
                        }
                      }}
                      color="white"
                      fontWeight="bold"
                      fontSize="lg"
                      _hover={{ bg: "gray.700" }}
                      defaultValue={selectedStatus}
                      value={selectedStatus}
                      onChange={handleStatusChange}
                    >
                      <option value="Dibatalkan">Dibatalkan</option>
                      <option value="Menunggu Pembayaran">
                        Menunggu Pembayaran
                      </option>
                      <option value="Dalam Proses">Dalam Proses</option>
                      <option value="Telah Dikirim">Telah Dikirim</option>
                      <option value="Selesai">Selesai</option>
                    </Select>
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

                    {selectedStatus === "Dibatalkan" ? (
                      <Flex
                        alignItems="center"
                        mt={4}
                        color="gray.700"
                        _dark={{
                          color: "gray.200"
                        }}
                      >
                        <Icon
                          as={MdDoNotDisturbAlt}
                          h={6}
                          w={6}
                          mr={2}
                          onClick={handleTextClick}
                        />
                        {isEditing || order.cancellationReason === "" ? (
                          <Input
                            placeholder={order.cancellationReason}
                            value={cancellationReason}
                            onChange={handleCancellationReasonChange}
                            onBlur={handleInputBlur}
                            textTransform="capitalize"
                          />
                        ) : (
                          <Text px={2}>{order.cancellationReason}</Text>
                        )}
                      </Flex>
                    ) : (
                      ""
                    )}

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
                  onClick={handleSaveChanges}
                  href="/contactus"
                  colorScheme="blue"
                  variant="outline"
                >
                  Save Changes
                </Button>
              </Center>
            </GridItem>
          </Grid>
        </Box>
      </Flex>
    </>
  );
};
export default Invoice;
