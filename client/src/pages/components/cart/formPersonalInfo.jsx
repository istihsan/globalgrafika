import {
  Heading,
  Flex,
  FormControl,
  FormLabel,
  Input,
  InputLeftAddon,
  InputGroup,
  FormHelperText
} from "@chakra-ui/react";

export default function FormPersonalInfo({ formData, setFormData }) {
  const handleInputChange = (field, value) => {
    setFormData(prevData => ({
      ...prevData,
      personalInfo: {
        ...prevData.personalInfo,
        [field]: value
      }
    }));
  };
  return (
    <>
      <Heading w="100%" textAlign={"center"} fontWeight="normal" mb="2%">
        Personal Information
      </Heading>
      <Flex>
        <FormControl mr="5%">
          <FormLabel fontWeight={"normal"}>First name</FormLabel>
          <Input
            id="first-name"
            placeholder="First name"
            onChange={e => handleInputChange("firstName", e.target.value)}
          />
        </FormControl>

        <FormControl>
          <FormLabel fontWeight={"normal"}>Last name</FormLabel>
          <Input
            id="last-name"
            placeholder="Last name"
            onChange={e => handleInputChange("lastName", e.target.value)}
          />
        </FormControl>
      </Flex>
      <FormControl mt="2%">
        <FormLabel fontWeight={"normal"}>Email address</FormLabel>
        <Input
          id="email"
          type="email"
          placeholder="istihsan@gmail.com"
          onChange={e => handleInputChange("email", e.target.value)}
        />
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
            onChange={e => handleInputChange("phoneNumber", e.target.value)}
          />
        </InputGroup>
      </FormControl>
    </>
  );
}
