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
  useDisclosure
} from "@chakra-ui/react";
import {
  EditIcon,
  DeleteIcon,
  ChevronLeftIcon,
  ChevronRightIcon
} from "@chakra-ui/icons";
import { post, get } from "../../../utils/request";
import { useToast } from "../../../hooks/useToast";

const DashboardTable = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    price: "",
    stock: 0
  });

  const isSaveButtonDisabled =
    !newProduct.name ||
    !newProduct.description ||
    !newProduct.price ||
    !newProduct.stock;

  const { successToast } = useToast();

  const handleOnSubmit = () => {
    const payload = {
      title: newProduct.name,
      description: newProduct.description,
      price: newProduct.price,
      stock: newProduct.stock
    };
    handleCreateNewProduct(payload);
  };

  const handleCreateNewProduct = async payload => {
    try {
      await post("/api/products", payload);
      successToast("Berhasil");
      onClose();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const result = await get("/api/products");
        setProducts(result);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);
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
                <FormLabel>Deskripsi Produk</FormLabel>
                <Input
                  placeholder="Banner sangat besar"
                  onChange={e =>
                    setNewProduct({
                      ...newProduct,
                      description: e.target.value
                    })
                  }
                  value={newProduct.description}
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
              <Th>Invoice Number</Th>
              <Th>Product Name</Th>
              <Th>Total Price</Th>
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
                <Td>001</Td>
                <Td>{product.title}</Td>
                <Td>$ {product.price}</Td>
                <Td>{/* Edit/Delete buttons here */}</Td>
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

export default DashboardTable;
