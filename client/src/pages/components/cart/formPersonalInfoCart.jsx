// import {
//   Box,
//   Heading,
//   Stack,
//   Text,
//   chakra,
//   GridItem,
//   Input,
//   SimpleGrid,
//   FormControl,
//   FormLabel,
//   Select
// } from "@chakra-ui/react";

// const FormCart = () => {
//   return (
//     <Box ml={"10%"} minW={"65vw"}>
//       <Box mt={[10, 0]}>
//         <SimpleGrid
//           display={{
//             base: "initial",
//             md: "grid"
//           }}
//           columns={{
//             md: 3
//           }}
//           spacing={{
//             md: 6
//           }}
//         >
//           <Box px={[4, 0]}></Box>
//           <GridItem
//             colSpan={{
//               md: 1
//             }}
//           ></GridItem>
//           <GridItem
//             mt={[5, null, 0]}
//             colSpan={{
//               md: 2
//             }}
//           >
//             <chakra.form
//               method="POST"
//               shadow="outline"
//               outlineColor={"#6497b1"}
//               rounded={[null, "md"]}
//               overflow={{
//                 sm: "hidden"
//               }}
//             >
//               <Stack
//                 px={4}
//                 py={5}
//                 p={[null, 6]}
//                 bg="white"
//                 _dark={{
//                   bg: "#141517"
//                 }}
//                 spacing={3}
//               >
//                 <Heading fontSize="lg" fontWeight="medium" lineHeight="6">
//                   Personal Information
//                 </Heading>
//                 <Text
//                   mt={1}
//                   fontSize="sm"
//                   color="gray.600"
//                   _dark={{
//                     color: "gray.400"
//                   }}
//                 >
//                   Use a permanent address where you can receive your order.
//                 </Text>
//                 <SimpleGrid columns={6} spacing={6}>
//                   <FormControl as={GridItem} colSpan={[6, 3]}>
//                     <FormLabel
//                       htmlFor="first_name"
//                       fontSize="sm"
//                       fontWeight="md"
//                       color="gray.700"
//                       _dark={{
//                         color: "gray.50"
//                       }}
//                     >
//                       First name
//                     </FormLabel>
//                     <Input
//                       type="text"
//                       name="first_name"
//                       id="first_name"
//                       autoComplete="given-name"
//                       mt={1}
//                       focusBorderColor="brand.400"
//                       shadow="sm"
//                       size="sm"
//                       w="full"
//                       rounded="md"
//                     />
//                   </FormControl>

//                   <FormControl as={GridItem} colSpan={[6, 3]}>
//                     <FormLabel
//                       htmlFor="last_name"
//                       fontSize="sm"
//                       fontWeight="md"
//                       color="gray.700"
//                       _dark={{
//                         color: "gray.50"
//                       }}
//                     >
//                       Last name
//                     </FormLabel>
//                     <Input
//                       type="text"
//                       name="last_name"
//                       id="last_name"
//                       autoComplete="family-name"
//                       mt={1}
//                       focusBorderColor="brand.400"
//                       shadow="sm"
//                       size="sm"
//                       w="full"
//                       rounded="md"
//                     />
//                   </FormControl>

//                   <FormControl as={GridItem} colSpan={[6, 4]}>
//                     <FormLabel
//                       htmlFor="email_address"
//                       fontSize="sm"
//                       fontWeight="md"
//                       color="gray.700"
//                       _dark={{
//                         color: "gray.50"
//                       }}
//                     >
//                       Email address
//                     </FormLabel>
//                     <Input
//                       type="text"
//                       name="email_address"
//                       id="email_address"
//                       autoComplete="email"
//                       mt={1}
//                       focusBorderColor="brand.400"
//                       shadow="sm"
//                       size="sm"
//                       w="full"
//                       rounded="md"
//                     />
//                   </FormControl>

//                   <FormControl as={GridItem} colSpan={6}>
//                     <FormLabel
//                       htmlFor="street_address"
//                       fontSize="sm"
//                       fontWeight="md"
//                       color="gray.700"
//                       _dark={{
//                         color: "gray.50"
//                       }}
//                     >
//                       Alamat Lengkap
//                     </FormLabel>
//                     <Input
//                       type="text"
//                       name="street_address"
//                       id="street_address"
//                       autoComplete="street-address"
//                       mt={1}
//                       focusBorderColor="brand.400"
//                       shadow="sm"
//                       size="sm"
//                       w="full"
//                       rounded="md"
//                     />
//                   </FormControl>
//                   <FormControl as={GridItem} colSpan={[6, 3]}>
//                     <FormLabel
//                       htmlFor="country"
//                       fontSize="sm"
//                       fontWeight="md"
//                       color="gray.700"
//                       _dark={{
//                         color: "gray.50"
//                       }}
//                     >
//                       Pilihan Pengiriman
//                     </FormLabel>
//                     <Select
//                       id="country"
//                       name="country"
//                       autoComplete="country"
//                       placeholder="Select option"
//                       mt={1}
//                       focusBorderColor="brand.400"
//                       shadow="sm"
//                       size="sm"
//                       w="full"
//                       rounded="md"
//                     >
//                       {" "}
//                     </Select>
//                   </FormControl>
//                 </SimpleGrid>
//               </Stack>
//               <Stack
//                 px={4}
//                 py={5}
//                 p={[null, 6]}
//                 bg="white"
//                 _dark={{
//                   bg: "#141517"
//                 }}
//                 spacing={3}
//               >
//                 <Heading
//                   w="100%"
//                   textAlign={"center"}
//                   fontWeight="normal"
//                   mb="2%"
//                 >
//                   User Details
//                 </Heading>
//                 <FormControl as={GridItem} colSpan={[6, 3]}>
//                   <FormLabel
//                     htmlFor="country"
//                     fontSize="sm"
//                     fontWeight="md"
//                     color="gray.700"
//                     _dark={{
//                       color: "gray.50"
//                     }}
//                   >
//                     Country / Region
//                   </FormLabel>
//                   <Select
//                     id="country"
//                     name="country"
//                     autoComplete="country"
//                     placeholder="Select option"
//                     focusBorderColor="brand.400"
//                     shadow="sm"
//                     size="sm"
//                     w="full"
//                     rounded="md"
//                   >
//                     <option>United States</option>
//                     <option>Canada</option>
//                     <option>Mexico</option>
//                   </Select>
//                 </FormControl>

//                 <FormControl as={GridItem} colSpan={6}>
//                   <FormLabel
//                     htmlFor="street_address"
//                     fontSize="sm"
//                     fontWeight="md"
//                     color="gray.700"
//                     _dark={{
//                       color: "gray.50"
//                     }}
//                     mt="2%"
//                   >
//                     Street address
//                   </FormLabel>
//                   <Input
//                     type="text"
//                     name="street_address"
//                     id="street_address"
//                     autoComplete="street-address"
//                     focusBorderColor="brand.400"
//                     shadow="sm"
//                     size="sm"
//                     w="full"
//                     rounded="md"
//                   />
//                 </FormControl>

//                 <FormControl as={GridItem} colSpan={[6, 6, null, 2]}>
//                   <FormLabel
//                     htmlFor="city"
//                     fontSize="sm"
//                     fontWeight="md"
//                     color="gray.700"
//                     _dark={{
//                       color: "gray.50"
//                     }}
//                     mt="2%"
//                   >
//                     City
//                   </FormLabel>
//                   <Input
//                     type="text"
//                     name="city"
//                     id="city"
//                     autoComplete="city"
//                     focusBorderColor="brand.400"
//                     shadow="sm"
//                     size="sm"
//                     w="full"
//                     rounded="md"
//                   />
//                 </FormControl>

//                 <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
//                   <FormLabel
//                     htmlFor="state"
//                     fontSize="sm"
//                     fontWeight="md"
//                     color="gray.700"
//                     _dark={{
//                       color: "gray.50"
//                     }}
//                     mt="2%"
//                   >
//                     State / Province
//                   </FormLabel>
//                   <Input
//                     type="text"
//                     name="state"
//                     id="state"
//                     autoComplete="state"
//                     focusBorderColor="brand.400"
//                     shadow="sm"
//                     size="sm"
//                     w="full"
//                     rounded="md"
//                   />
//                 </FormControl>

//                 <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
//                   <FormLabel
//                     htmlFor="postal_code"
//                     fontSize="sm"
//                     fontWeight="md"
//                     color="gray.700"
//                     _dark={{
//                       color: "gray.50"
//                     }}
//                     mt="2%"
//                   >
//                     ZIP / Postal
//                   </FormLabel>
//                   <Input
//                     type="text"
//                     name="postal_code"
//                     id="postal_code"
//                     autoComplete="postal-code"
//                     focusBorderColor="brand.400"
//                     shadow="sm"
//                     size="sm"
//                     w="full"
//                     rounded="md"
//                   />
//                 </FormControl>
//               </Stack>
//             </chakra.form>
//           </GridItem>
//         </SimpleGrid>
//       </Box>
//     </Box>
//   );
// };

// export default FormCart;

"use client";

import { useState } from "react";
import {
  Progress,
  Box,
  ButtonGroup,
  Button,
  Heading,
  Flex,
  FormControl,
  GridItem,
  FormLabel,
  Input,
  Select,
  SimpleGrid,
  InputLeftAddon,
  InputGroup,
  Textarea,
  FormHelperText,
  InputRightElement
} from "@chakra-ui/react";

import { useToast } from "@chakra-ui/react";

const Form1 = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  return (
    <>
      <Heading w="100%" textAlign={"center"} fontWeight="normal" mb="2%">
        Personal Information
      </Heading>
      <Flex>
        <FormControl mr="5%">
          <FormLabel fontWeight={"normal"}>First name</FormLabel>
          <Input id="first-name" placeholder="First name" />
        </FormControl>

        <FormControl>
          <FormLabel fontWeight={"normal"}>Last name</FormLabel>
          <Input id="last-name" placeholder="Last name" />
        </FormControl>
      </Flex>
      <FormControl mt="2%">
        <FormLabel fontWeight={"normal"}>Email address</FormLabel>
        <Input id="email" type="email" placeholder="istihsan@gmail.com" />
        <FormHelperText>We&apos;ll never share your email.</FormHelperText>
      </FormControl>

      <FormControl mt="2%">
        <FormLabel
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: "gray.50"
          }}
        >
          Phone Number
        </FormLabel>
        <InputGroup size="sm">
          <InputLeftAddon
            bg="gray.50"
            _dark={{
              bg: "gray.800"
            }}
            color="gray.500"
            rounded="md"
          >
            +62
          </InputLeftAddon>
          <Input
            type="tel"
            placeholder="85156152312"
            focusBorderColor="brand.400"
            rounded="md"
          />
        </InputGroup>
      </FormControl>
    </>
  );
};

const Form2 = () => {
  return (
    <>
      <Heading w="100%" textAlign={"center"} fontWeight="normal" mb="2%">
        Address Information
      </Heading>
      <FormControl as={GridItem} colSpan={[6, 3]}>
        <FormLabel
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: "gray.50"
          }}
        >
          Region
        </FormLabel>
        <Select
          id="country"
          name="country"
          autoComplete="country"
          placeholder="Select option"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
        >
          <option>Jabodetabek</option>
          <option>Banten</option>
          <option>Jawa Barat</option>
          <option>Jawa Tengah</option>
          <option>Jawa Timur</option>
          <option>D.I Yogyakarta</option>
        </Select>
      </FormControl>

      <FormControl as={GridItem} colSpan={6}>
        <FormLabel
          htmlFor="street_address"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: "gray.50"
          }}
          mt="2%"
        >
          Street address
        </FormLabel>
        <Input
          type="text"
          name="street_address"
          id="street_address"
          autoComplete="street-address"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
        />
      </FormControl>

      <FormControl as={GridItem} colSpan={[6, 6, null, 2]}>
        <FormLabel
          htmlFor="city"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: "gray.50"
          }}
          mt="2%"
        >
          City
        </FormLabel>
        <Input
          type="text"
          name="city"
          id="city"
          autoComplete="city"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
        />
      </FormControl>

      <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
        <FormLabel
          htmlFor="state"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: "gray.50"
          }}
          mt="2%"
        >
          State / Province
        </FormLabel>
        <Input
          type="text"
          name="state"
          id="state"
          autoComplete="state"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
        />
      </FormControl>

      <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
        <FormLabel
          htmlFor="postal_code"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: "gray.50"
          }}
          mt="2%"
        >
          ZIP / Postal
        </FormLabel>
        <Input
          type="text"
          name="postal_code"
          id="postal_code"
          autoComplete="postal-code"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
        />
      </FormControl>
    </>
  );
};

const Form3 = () => {
  return (
    <>
      <Heading w="100%" textAlign={"center"} fontWeight="normal">
        Delivery Option
      </Heading>
      <SimpleGrid columns={1} spacing={6}>
        <FormControl as={GridItem} colSpan={[6, 3]}>
          <FormLabel
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: "gray.50"
            }}
          >
            Courier
          </FormLabel>
          <Select
            id="country"
            name="country"
            autoComplete="country"
            placeholder="Select option"
            focusBorderColor="brand.400"
            shadow="sm"
            size="sm"
            w="full"
            rounded="md"
          >
            <option>JNE</option>
            <option>Pos Indonesia</option>
            <option>SiCepat</option>
          </Select>
        </FormControl>
      </SimpleGrid>
    </>
  );
};

export default function FormCart() {
  const toast = useToast();
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(33.33);

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
        {step === 1 ? <Form1 /> : step === 2 ? <Form2 /> : <Form3 />}
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
                  onClick={() => {
                    toast({
                      title: "Order created.",
                      description: "We've created your order for you.",
                      status: "success",
                      duration: 3000,
                      isClosable: true
                    });
                  }}
                >
                  Go To Payments
                </Button>
              )}
            </Flex>
          </Flex>
        </ButtonGroup>
      </Box>
    </>
  );
}
