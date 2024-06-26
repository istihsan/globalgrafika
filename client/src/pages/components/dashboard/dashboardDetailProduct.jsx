import DashboardNav from "./dashboardNav";
import { React, useState, useEffect, useRef } from "react";
import {
  Button,
  Input,
  Flex,
  Center,
  VisuallyHidden,
  Divider,
  chakra,
  FormLabel,
  FormControl,
  Select,
  CardHeader,
  CardFooter,
  CardBody,
  Card,
  useDisclosure,
  IconButton
} from "@chakra-ui/react";
import { useParams } from "react-router";
import { patch, get } from "../../../utils/request";
import { useToast } from "../../../hooks/useToast";
import { DeleteIcon } from "@chakra-ui/icons";
import DashboardMain from "./dashboardStats";

const DashboardDetailProduct = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef(null);
  const finalRef = useRef(null);

  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    stock: "",
    descriptionMain: "",
    descriptionSecondary: "",
    unit: "",
    categories: "",
    productImageUrl: "",
    productVariants: []
  });

  const { successToast } = useToast();

  const handleOnSubmit = () => {
    const payload = {};
    const isNotEmptyString = value => value !== "";
    if (
      newProduct.name !== product.title &&
      isNotEmptyString(newProduct.name)
    ) {
      payload.title = newProduct.name;
    }
    if (
      newProduct.descriptionMain !== product.descriptionMain &&
      isNotEmptyString(newProduct.descriptionMain)
    ) {
      payload.descriptionMain = newProduct.descriptionMain;
    }
    if (
      newProduct.descriptionSecondary !== product.descriptionSecondary &&
      isNotEmptyString(newProduct.descriptionSecondary)
    ) {
      payload.descriptionSecondary = newProduct.descriptionSecondary;
    }
    if (
      newProduct.stock !== product.stock &&
      isNotEmptyString(newProduct.stock)
    ) {
      payload.stock = newProduct.stock;
    }
    if (newProduct.unit !== product.unit && isNotEmptyString(newProduct.unit)) {
      payload.unit = newProduct.unit;
    }
    if (
      newProduct.categories !== product.categories &&
      isNotEmptyString(newProduct.categories)
    ) {
      payload.categories = newProduct.categories;
    }
    if (
      newProduct.productImageUrl !== product.productImageUrl &&
      isNotEmptyString(newProduct.productImageUrl)
    ) {
      payload.productImageUrl = newProduct.productImageUrl;
    }
    if (
      !arraysEqual(newProduct.productVariants, product.productVariants) &&
      Array.isArray(newProduct.productVariants) &&
      newProduct.productVariants.length > 0
    ) {
      payload.productVariants = newProduct.productVariants.map(variant => ({
        name: variant.name || "",
        price: variant.price || ""
      }));
    }
    if (Object.keys(payload).length > 0) {
      handleUpdateProduct(payload);
    }
  };

  const arraysEqual = (arr1, arr2) => {
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) return false;
    }
    return true;
  };
  const handleUpdateProduct = async payload => {
    try {
      await patch(`/api/products/${params.id}`, payload);
      successToast("Produk Berhasil di Update");
      onClose();
    } catch (error) {
      console.log(error);
    }
  };

  const params = useParams();
  useEffect(() => {
    const fetchProduct = async () => {
      setIsLoading(true);
      try {
        const product = await get(`/api/products/${params.id}`);
        setProduct(product);
        console.log(product);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, []);
  return (
    <>
      <DashboardNav />
      <DashboardMain />
      <Divider mb={5} maxW={"75%"} mx={"auto"} borderColor={"blackAlpha.400"} />
      <Card maxW={"80%"} mx={"auto"} mb={5}>
        <Center>
          <CardHeader
            lineHeight={1.1}
            fontWeight={700}
            fontSize={{ base: "xl", sm: "2xl", lg: "4xl" }}
          >
            Edit Produk <VisuallyHidden>++++</VisuallyHidden>
            <chakra.span
              color="teal"
              bg="linear-gradient(transparent 50%, #83e9e7 50%)"
            >
              {product.title}
            </chakra.span>
          </CardHeader>
        </Center>
        <CardBody pb={6}>
          <FormControl>
            <FormLabel>Nama Produk</FormLabel>
            <Input
              ref={initialRef}
              placeholder={product.title}
              onChange={e =>
                setNewProduct({ ...newProduct, name: e.target.value })
              }
              value={newProduct.name}
            />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Deskripsi Utama</FormLabel>
            <Input
              placeholder={product.descriptionMain}
              onChange={e =>
                setNewProduct({
                  ...newProduct,
                  descriptionMain: e.target.value
                })
              }
              value={newProduct.descriptionMain}
            />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Deskripsi Tambahan</FormLabel>
            <Input
              placeholder={product.descriptionSecondary}
              onChange={e =>
                setNewProduct({
                  ...newProduct,
                  descriptionSecondary: e.target.value
                })
              }
              value={newProduct.descriptionSecondary}
            />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Jumlah Stok</FormLabel>
            <Input
              placeholder="10.000"
              onChange={e =>
                setNewProduct({ ...newProduct, stock: e.target.value })
              }
              value={newProduct.stock}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Unit</FormLabel>
            <Select
              placeholder="Pilih satuan produk"
              onChange={e =>
                setNewProduct({ ...newProduct, unit: e.target.value })
              }
              value={newProduct.unit}
            >
              {["pcs", "kg", "msquared"].map((unit, index) => (
                <option key={index} value={unit}>
                  {unit}
                </option>
              ))}
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel>Categories</FormLabel>
            <Select
              placeholder="Pilih kategori    produk"
              onChange={e =>
                setNewProduct({ ...newProduct, categories: e.target.value })
              }
              value={newProduct.categories}
            >
              {[
                "digitalprintingsmall",
                "digitalprintinglarge",
                "officesupplies",
                "merchandise"
              ].map((categories, index) => (
                <option key={index} value={categories}>
                  {categories}
                </option>
              ))}
            </Select>
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>URL Gambar Produk</FormLabel>
            <Input
              placeholder={product.productImageUrl}
              onChange={e =>
                setNewProduct({
                  ...newProduct,
                  productImageUrl: e.target.value
                })
              }
              value={newProduct.productImageUrl}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Variant Produk</FormLabel>
            {newProduct.productVariants.map((variant, index) => (
              <Flex key={index} mb={2}>
                <Input
                  placeholder={`Variant ${index + 1}`}
                  onChange={e => {
                    const updatedVariants = [...newProduct.productVariants];
                    updatedVariants[index] = {
                      name: e.target.value,
                      price: variant.price || ""
                    };
                    setNewProduct({
                      ...newProduct,
                      productVariants: updatedVariants
                    });
                  }}
                  value={variant.name}
                />
                <Input
                  placeholder={`Price for Variant ${index + 1}`}
                  onChange={e => {
                    const updatedVariants = [...newProduct.productVariants];
                    updatedVariants[index] = {
                      name: variant.name || "",
                      price: e.target.value
                    };
                    setNewProduct({
                      ...newProduct,
                      productVariants: updatedVariants
                    });
                  }}
                  value={variant.price}
                />
                <IconButton
                  aria-label="Remove Variant"
                  icon={<DeleteIcon />}
                  onClick={() => {
                    const updatedVariants = [
                      ...newProduct.productVariants.slice(0, index),
                      ...newProduct.productVariants.slice(index + 1)
                    ];
                    setNewProduct({
                      ...newProduct,
                      productVariants: updatedVariants
                    });
                  }}
                />
              </Flex>
            ))}
            <Button
              onClick={() =>
                setNewProduct({
                  ...newProduct,
                  productVariants: [...newProduct.productVariants, ""]
                })
              }
            >
              Add Variant
            </Button>
          </FormControl>
        </CardBody>

        <CardFooter>
          <Button colorScheme="blue" mr={3} onClick={handleOnSubmit}>
            Save
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default DashboardDetailProduct;
