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
  formData: initialFormData = {},
  setFormData,
  totalOrder
}) {
  const toast = useToast();
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(33.33);
  const navigate = useNavigate();
  const [personalInfo, setPersonalInfo] = useState(
    initialFormData.personalInfo || {}
  );
  const [addressInfo, setAddressInfo] = useState(
    initialFormData.addressInfo || {}
  );
  const [deliveryOption, setDeliveryOption] = useState(
    initialFormData.deliveryOption || {}
  );

  const handlePersonalInfoChange = (field, value) => {
    setPersonalInfo(prevData => ({
      ...prevData,
      [field]: value
    }));
  };

  const handleAddressInfoChange = (field, value) => {
    setAddressInfo(prevData => ({
      ...prevData,
      [field]: value
    }));
  };

  const handleDeliveryOptionChange = (field, value) => {
    setDeliveryOption(prevData => ({
      ...prevData,
      [field]: value
    }));
  };

  const handleSubmitOrder = async () => {
    try {
      const orders = cartData.map(({ file, ...rest }, index) => ({
        ...rest,
        fileIndex: file ? index : null
      }));
      const dataToUpload = new FormData();
      dataToUpload.append(
        "customerName",
        personalInfo.firstName + " " + personalInfo.lastName
      );
      dataToUpload.append(
        "customerAddress",
        addressInfo.streetAddress +
          ", " +
          addressInfo.city +
          ", " +
          addressInfo.subdistrict +
          ", " +
          addressInfo.postalCode
      );
      dataToUpload.append("customerEmailAddress", personalInfo.email);
      dataToUpload.append("customerPhoneNum", "+62" + personalInfo.phoneNumber);
      dataToUpload.append("totalOrder", totalOrder);
      dataToUpload.append("orderStatus", "Menunggu Pembayaran");
      dataToUpload.append("orderItem", JSON.stringify(orders));
      cartData.forEach(({ file }) => {
        if (file) {
          dataToUpload.append(`image[]`, file);
        }
      });
      dataToUpload.append("deliveryOption", deliveryOption.courier);

      //cartData => File[], OrderItem
      const response = await post(
        "/api/orders",
        dataToUpload,
        "MULTIPART_FORM_DATA"
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
          <FormPersonalInfo
            formData={personalInfo}
            handleInputChange={handlePersonalInfoChange}
          />
        ) : step === 2 ? (
          <FormAddressInfo
            formData={addressInfo}
            handleInputChange={handleAddressInfoChange}
          />
        ) : (
          <FormDeliveryOption
            formData={deliveryOption}
            handleInputChange={handleDeliveryOptionChange}
          />
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
