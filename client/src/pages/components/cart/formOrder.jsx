import { useState } from "react";
import { Progress, Box, ButtonGroup, Button, Flex } from "@chakra-ui/react";
import FormPersonalInfo from "./formPersonalInfo";
import FormAddressInfo from "./formAddressInfo";
import FormDeliveryOption from "./formDeliveryOption";
import { post } from "../../../utils/request";
import { useNavigate } from "react-router-dom";

import { useToast } from "@chakra-ui/react";

export default function FormOrder({
  cartData,
  setCartData,
  formData,
  setFormData,
  totalOrder
}) {
  const toast = useToast();
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(33.33);
  const navigate = useNavigate();

  const handleSubmitOrder = async () => {
    try {
      // const combinedData = {
      //   customerName:
      //     formData.personalInfo.firstName +
      //     " " +
      //     formData.personalInfo.lastName,
      //   customerAddress:
      //     formData.addressInfo.streetAddress +
      //     ", " +
      //     formData.addressInfo.city +
      //     ", " +
      //     formData.addressInfo.subdistrict +
      //     ", " +
      //     formData.addressInfo.postalCode,
      //   customerEmailAddress: formData.personalInfo.email,
      //   customerPhoneNum: "+62" + formData.personalInfo.phoneNumber,
      //   totalOrder: totalOrder,
      //   orderStatus: "Menunggu Pembayaran",
      //   orderItem: cartData.map(item => ({
      //     title: item.title,
      //     productVariant: item.productVariant,
      //     productImageUrl: item.productImageUrl,
      //     quantity: item.quantity,
      //     unit: item.unit,
      //     price: item.price,
      //     customerNotes: item.customerNote,
      //     referenceFile: item.file
      //   })),
      //   deliveryOption: formData.deliveryOption.courier
      // };
      const dataToUpload = new FormData();
      dataToUpload.append(
        "customerName",
        formData.personalInfo.firstName + " " + formData.personalInfo.lastName
      );
      dataToUpload.append(
        "customerAddress",
        formData.addressInfo.streetAddress +
          ", " +
          formData.addressInfo.city +
          ", " +
          formData.addressInfo.subdistrict +
          ", " +
          formData.addressInfo.postalCode
      );
      dataToUpload.append("customerEmailAddress", formData.personalInfo.email);
      dataToUpload.append(
        "customerPhoneNum",
        "+62" + formData.personalInfo.phoneNumber
      );
      dataToUpload.append("totalOrder", totalOrder);
      dataToUpload.append("orderStatus", "Menunggu Pembayaran");
      dataToUpload.append(
        "orderItem",
        cartData.map(item => ({
          title: item.title,
          productVariant: item.productVariant,
          productImageUrl: item.productImageUrl,
          quantity: item.quantity,
          unit: item.unit,
          price: item.price,
          customerNotes: item.customerNote,
          referenceFile: item.file
        }))
      );
      dataToUpload.append("deliveryOption", formData.deliveryOption.courier);

      const response = await post(
        "/api/orders",
        dataToUpload,
        "MULTIPART-FORM-DATA"
      );

      setFormData({
        personalInfo: {},
        addressInfo: {},
        deliveryOption: {}
      });
      // setCartData([]);

      toast({
        title: "Order created.",
        description: "We've created your order for you.",
        status: "success",
        duration: 3000,
        isClosable: true
      });
      if (response && response._id) {
        const orderId = response._id.toString();
        navigate(`/invoice/${orderId}`);
      } else {
        console.error("Order ID not found in the response:", response);
      }
    } catch (error) {
      console.error("Error submitting order:", error);
      toast({
        title: "Error submitting order.",
        description: "There was an error creating your order.",
        status: "error",
        duration: 3000,
        isClosable: true
      });
    }
  };

  return (
    <>
      <Box
        borderWidth="1px"
        rounded="lg"
        maxWidth={800}
        maxHeight={step === 1 ? "55vh" : step === 2 ? "65vh" : "30vh"}
        p={6}
        ml="10%"
        my="4%"
        as="form"
        bgColor={"white"}
      >
        <Progress
          hasStripe
          value={progress}
          mb="5%"
          mx="5%"
          isAnimated
        ></Progress>
        {step === 1 ? (
          <FormPersonalInfo formData={formData} setFormData={setFormData} />
        ) : step === 2 ? (
          <FormAddressInfo formData={formData} setFormData={setFormData} />
        ) : (
          <FormDeliveryOption formData={formData} setFormData={setFormData} />
        )}
        <ButtonGroup mt="5%" w="100vw">
          <Flex w="100vw" justifyContent="space-between">
            <Flex>
              <Button
                onClick={() => {
                  if (step === 1) {
                    setStep(1);
                    setProgress(progress);
                  } else {
                    setStep(step - 1);
                    setProgress(progress - 33.33);
                  }
                }}
                isDisabled={step === 1}
                colorScheme="blue"
                variant="solid"
                w="7rem"
                mr="5%"
              >
                Back
              </Button>
              {step < 3 ? (
                <Button
                  w="7rem"
                  onClick={() => {
                    setStep(step + 1);
                    setProgress(progress + 33.33);
                  }}
                  colorScheme="blue"
                  variant="outline"
                >
                  Next
                </Button>
              ) : (
                <Button
                  w="10rem"
                  colorScheme="teal"
                  variant="solid"
                  onClick={handleSubmitOrder}
                >
                  Submit Order
                </Button>
              )}
            </Flex>
          </Flex>
        </ButtonGroup>
      </Box>
    </>
  );
}
