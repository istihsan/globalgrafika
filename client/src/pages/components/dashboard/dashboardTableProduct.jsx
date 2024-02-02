import React, { useEffect, useState } from "react";
import {
  Box,
  Heading,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  HStack,
  TableCaption,
  IconButton,
  Center,
  Button,
  Spacer,
  Flex,
  FormControl,
  FormLabel,
  Input,
  ModalFooter,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
  Select,
  Link
} from "@chakra-ui/react";
import {
  EditIcon,
  DeleteIcon,
  ChevronLeftIcon,
  ChevronRightIcon
} from "@chakra-ui/icons";
import { post, get } from "../../../utils/request";
import { useToast } from "../../../hooks/useToast";

const DashboardTableProduct = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    price: 0,
    stock: 0,
    descriptionMain: "",
    descriptionSecondary: "",
    unit: "",
    categories: "",
    productImageUrl: "",
    productVariant: []
  });

  const isSaveButtonDisabled =
    !newProduct.name ||
    !newProduct.descriptionMain ||
    !newProduct.descriptionSecondary ||
    !newProduct.price ||
    !newProduct.stock ||
    !newProduct.unit ||
    !newProduct.categories ||
    !newProduct.productImageUrl ||
    !newProduct.productVariant;

  const { successToast } = useToast();

  const handleOnSubmit = () => {
    const payload = {
      title: newProduct.name,
      price: newProduct.price,
      stock: newProduct.stock,
      descriptionMain: newProduct.descriptionMain,
      descriptionSecondary: newProduct.descriptionSecondary,
      unit: newProduct.unit,
      categories: newProduct.categories,
      productImageUrl: newProduct.productImageUrl,
      productVariant:
        typeof newProduct.productVariant === "string"
          ? [newProduct.productVariant]
          : newProduct.productVariant
    };
    handleCreateNewProduct(payload);
  };

  const handleCreateNewProduct = async payload => {
    try {
      await post("/api/products", payload);
      successToast("Produk Berhasil di Simpan");
      onClose();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const product = await get("/api/products");
        setProducts(product);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);
  console.log(products);
  console.log("==============");
  const formatCurrency = amount => {
    const formatter = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR"
    });

    return formatter.format(amount);
  };

  return (
    <Center>
      <Box
        p={4}
        borderWidth="2px"
        borderRadius="md"
        minW={"69%"}
        bgColor={"white"}
        boxShadow={"xl"}
      >
        <Flex>
          <Heading mb={4} fontSize="xl">
            Riwayat Penjualan
          </Heading>
          <Spacer />
          <Button colorScheme="green" onClick={onOpen}>
            Add New Order
          </Button>
        </Flex>

        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Buat/Tambah Produk</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Nama Produk</FormLabel>
                <Input
                  ref={initialRef}
                  placeholder="Banner"
                  onChange={e =>
                    setNewProduct({ ...newProduct, name: e.target.value })
                  }
                  value={newProduct.name}
                />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Deskripsi Utama</FormLabel>
                <Input
                  placeholder="Banner sangat besar"
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
                <FormLabel>Deskripsi Produk</FormLabel>
                <Input
                  placeholder="Dibuat dengan kertas yang berkualitas"
                  onChange={e =>
                    setNewProduct({
                      ...newProduct,
                      descriptionSecondary: e.target.value
                    })
                  }
                  value={newProduct.descriptionSecondary}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Harga Produk</FormLabel>
                <Input
                  placeholder="250.000"
                  onChange={e =>
                    setNewProduct({ ...newProduct, price: e.target.value })
                  }
                  value={newProduct.price}
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
                  placeholder="Dijual dalam ukuran ..."
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
                  placeholder="Kategori Produk"
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
                  placeholder="www.contohgambar.com/1"
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
                {newProduct.productVariant.map((variant, index) => (
                  <Flex key={index} mb={2}>
                    <Input
                      placeholder={`Variant ${index + 1}`}
                      onChange={e => {
                        const updatedVariants = [...newProduct.productVariant];
                        updatedVariants[index] = e.target.value;
                        setNewProduct({
                          ...newProduct,
                          productVariant: updatedVariants
                        });
                      }}
                      value={variant}
                    />
                    <IconButton
                      aria-label="Remove Variant"
                      icon={<DeleteIcon />}
                      onClick={() => {
                        const updatedVariants = [
                          ...newProduct.productVariant.slice(0, index),
                          ...newProduct.productVariant.slice(index + 1)
                        ];
                        setNewProduct({
                          ...newProduct,
                          productVariant: updatedVariants
                        });
                      }}
                    />
                  </Flex>
                ))}
                <Button
                  onClick={() =>
                    setNewProduct({
                      ...newProduct,
                      productVariant: [...newProduct.productVariant, ""]
                    })
                  }
                >
                  Add Variant
                </Button>
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button
                colorScheme="blue"
                mr={3}
                onClick={handleOnSubmit}
                isDisabled={isSaveButtonDisabled}
              >
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

        <Text mb={4}>Lihat, Bandingkan, Ulas Kembali, Edit, atau Hapus</Text>

        <Table variant="striped">
          <Thead bgColor={"#E5E5E5"}>
            <Tr>
              <Th>Product Name</Th>
              <Th>Total Price</Th>
              <Th>Stock Produk</Th>
              <Th>Edit/Delete</Th>
            </Tr>
          </Thead>
          <Tbody>
            {isLoading && (
              <Tr>
                <Td colSpan={4}>Loading products...</Td>
              </Tr>
            )}
            {error && (
              <Tr>
                <Td colSpan={4}>Error: {error.message}</Td>
              </Tr>
            )}
            {products.map(product => (
              <Tr key={product.title}>
                <Td>{product.title}</Td>
                <Td>
                  {formatCurrency(product.price)}/{product.unit}
                </Td>
                <Td>{product.stock}</Td>
                <Td>
                  <IconButton
                    as={Link}
                    href={`/dashboard/detailproduct/${product._id.toString()}`}
                    colorScheme="blue"
                    aria-label="Edit"
                    icon={<EditIcon />}
                    mr={2}
                  />
                  <IconButton
                    colorScheme="red"
                    aria-label="Delete"
                    icon={<DeleteIcon />}
                  />
                </Td>
              </Tr>
            ))}
          </Tbody>
          <TableCaption>
            <Center>
              <HStack>
                <IconButton
                  colorScheme="blue"
                  aria-label="Previous Page"
                  icon={<ChevronLeftIcon />}
                />
                <Text mx={5}>Page 1 of 5</Text>
                <IconButton
                  colorScheme="blue"
                  aria-label="Next Page"
                  icon={<ChevronRightIcon />}
                />
              </HStack>
            </Center>
          </TableCaption>
        </Table>
      </Box>
    </Center>
  );
};

export default DashboardTableProduct;
