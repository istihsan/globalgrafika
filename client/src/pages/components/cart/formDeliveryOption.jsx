import {
  Heading,
  FormControl,
  GridItem,
  FormLabel,
  Select,
  SimpleGrid
} from "@chakra-ui/react";

export default function FormDeliveryOption({ formData, handleInputChange }) {
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
            onChange={e => handleInputChange("courier", e.target.value)}
            value={formData.courier || ""}
          >
            <option>JNE</option>
            <option>Pos Indonesia</option>
            <option>SiCepat</option>
          </Select>
        </FormControl>
      </SimpleGrid>
    </>
  );
}
