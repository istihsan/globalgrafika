import { useToast as useChakraToast } from "@chakra-ui/react";

export const useToast = () => {
  const toast = useChakraToast();
  const successToast = description => {
    toast({
      title: "Success",
      description,
      status: "success",
      duration: 9000,
      isClosable: true
    });
  };
  const errorToast = description => {
    toast({
      title: "Error",
      description,
      status: "error",
      duration: 9000,
      isClosable: true
    });
  };
  return { successToast, errorToast };
};
