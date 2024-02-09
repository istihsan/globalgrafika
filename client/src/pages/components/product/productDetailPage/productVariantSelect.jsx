import {
  useRadio,
  chakra,
  Box,
  Image,
  useToast as useChakraToast,
  useRadioGroup,
  HStack
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { get } from "../../../../utils/request";

export default function ProductVariantSelect({ onVariantChange }) {
  function RadioCard(props) {
    const { getInputProps, getRadioProps } = useRadio(props);
    const input = getInputProps();
    const checkbox = getRadioProps();

    return (
      <Box as="label">
        <input {...input} />
        <Box
          {...checkbox}
          cursor="pointer"
          borderWidth="1px"
          borderRadius="md"
          boxShadow="md"
          _checked={{
            bg: "#009DFF",
            color: "white",
            borderColor: "#009DFF"
          }}
          _focus={{
            boxShadow: "outline"
          }}
          px={5}
          py={3}
        >
          {props.children}
        </Box>
      </Box>
    );
  }
  const toast = useChakraToast();

  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [productVariants, setProductVariants] = useState([]);
  const [productPrice, setProductPrice] = useState([]);

  const params = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      setIsLoading(true);
      try {
        const product = await get(`/api/products/${params.id}`);
        setProduct(product);
        setProductVariants(product.productVariants);
        setProductPrice(product.productVariants.price);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, []);

  const handleVariantChange = value => {
    onVariantChange(value);
    toast({
      title: `Kamu Memilih Variant ${value}!`,
      status: "success",
      duration: 2000
    });
  };

  const { value, getRootProps, getRadioProps } = useRadioGroup({
    name: "variant",
    defaultValue: productVariants.length > 0 ? productVariants[0].name : "",
    onChange: handleVariantChange
  });

  const group = getRootProps();
  return (
    <HStack {...group}>
      {productVariants &&
        productVariants.map((variant, index) => {
          const radio = getRadioProps({ value: variant.name });
          return (
            <RadioCard key={index} {...radio}>
              {variant.name}
            </RadioCard>
          );
        })}
    </HStack>
  );
}
