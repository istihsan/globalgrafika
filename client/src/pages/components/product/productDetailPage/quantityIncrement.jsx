import { HStack, Button, Input, useNumberInput } from "@chakra-ui/react";

export default function QuantityIncrement() {
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: 1,
      min: 1,
      max: 99
    });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps();

  return (
    <HStack>
      <Button {...dec} bg="whiteAlpha.800" borderColor="white" boxShadow="md">
        -
      </Button>
      <Input {...input} isReadOnly={true} />
      <Button {...inc} bg="whiteAlpha.800" borderColor="white" boxShadow="md">
        +
      </Button>
    </HStack>
  );
}
