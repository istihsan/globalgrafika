import React, { useEffect, useState, useRef } from "react";
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
  Link,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton
} from "@chakra-ui/react";
import {
  EditIcon,
  DeleteIcon,
  ChevronLeftIcon,
  ChevronRightIcon
} from "@chakra-ui/icons";
import { post, get, del } from "../../../utils/request";
import { useToast } from "../../../hooks/useToast";

const DashboardTableProduct = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isDeleteAlertOpen, setIsDeleteAlertOpen] = useState(false);
  const cancelRef = useRef();
  const initialRef = useRef(null);
  const finalRef = useRef(null);

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [productIdToDelete, setProductIdToDelete] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);

  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    stock: 0,
    descriptionMain: "",
    descriptionSecondary: "",
    unit: "",
    categories: "",
    productImageUrl: "",
    productVariants: []
  });

  const isSaveButtonDisabled =
    !newProduct.name ||
    !newProduct.descriptionMain ||
    !newProduct.descriptionSecondary ||
    !newProduct.stock ||
    !newProduct.unit ||
    !newProduct.categories ||
    !newProduct.productImageUrl ||
    !newProduct.productVariants;

  const { successToast, errorToast } = useToast();

  const handleOnSubmit = () => {
    const payload = {
      title: newProduct.name,
      stock: newProduct.stock,
      descriptionMain: newProduct.descriptionMain,
      descriptionSecondary: newProduct.descriptionSecondary,
      unit: newProduct.unit,
      categories: newProduct.categories,
      productImageUrl: newProduct.productImageUrl,
      productVariants:
        typeof newProduct.productVariants === "string"
          ? [newProduct.productVariants]
          : newProduct.productVariants
    };
    handleCreateNewProduct(payload);
  };

  const handleCreateNewProduct = async payload => {
    try {
      await post("/api/products", payload);
      successToast("Produk Berhasil di Simpan");
      onClose();
    } catch (error) {
      errorToast("Produk Gagal di Simpan");
      console.log(error);
    }
  };

  const handleDeleteProduct = productId => {
    setProductIdToDelete(productId);
    setIsDeleteAlertOpen(true);
  };

  const handleConfirmDelete = async () => {
    try {
      setIsDeleting(true);
      await del(`/api/products/${productIdToDelete}`);
      successToast("Produk Berhasil di Hapus");
      const updatedProducts = await get("/api/products");
      setProducts(updatedProducts);
      setIsDeleteAlertOpen(false);
    } catch (error) {
      errorToast("Produk Gagal di Hapus");
      console.log(error);
    } finally {
      setIsDeleting(false);
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
  // console.log(products);
  // console.log("==============");

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
            Add New Product
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
                {(newProduct.productVariants || []).map((variant, index) => (
                  <Flex key={index} mb={2}>
                    <Input
                      placeholder={`Variant ${index + 1}`}
                      onChange={e => {
                        const updatedVariants = [
                          ...(newProduct.productVariants || [])
                        ];
                        updatedVariants[index] = {
                          name: e.target.value,
                          price: variant.price || 0
                        };
                        setNewProduct({
                          ...newProduct,
                          productVariants: updatedVariants
                        });
                      }}
                      value={variant?.name || ""}
                    />
                    <Input
                      placeholder={`Price for Variant ${index + 1}`}
                      type="number"
                      onChange={e => {
                        const updatedVariants = [
                          ...(newProduct.productVariants || [])
                        ];
                        updatedVariants[index] = {
                          name: variant.name || "",
                          price: e.target.value
                        };
                        setNewProduct({
                          ...newProduct,
                          productVariants: updatedVariants
                        });
                      }}
                      value={variant?.price || 0}
                    />
                    <IconButton
                      aria-label="Remove Variant"
                      icon={<DeleteIcon />}
                      onClick={() => {
                        const updatedVariants = [
                          ...(newProduct.productVariants || []).slice(0, index),
                          ...(newProduct.productVariants || []).slice(index + 1)
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
                      productVariants: [
                        ...(newProduct.productVariants || []),
                        { name: "", price: 0 }
                      ]
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

        <AlertDialog
          isOpen={isDeleteAlertOpen}
          leastDestructiveRef={cancelRef}
          onClose={() => setIsDeleteAlertOpen(false)}
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize="lg" fontWeight="bold">
                Delete Product
              </AlertDialogHeader>

              <AlertDialogBody>
                Are you sure you want to delete this product? This action cannot
                be undone.
              </AlertDialogBody>

              <AlertDialogFooter>
                <Button
                  ref={cancelRef}
                  onClick={() => setIsDeleteAlertOpen(false)}
                >
                  Cancel
                </Button>
                <Button colorScheme="red" onClick={handleConfirmDelete} ml={3}>
                  Delete
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>

        <Text mb={4}>Lihat, Bandingkan, Ulas Kembali, Edit, atau Hapus</Text>

        <Table variant="striped">
          <Thead bgColor={"#E5E5E5"}>
            <Tr>
              <Th>Product Name</Th>
              <Th>Start From Price</Th>
              <Th>Stock Product</Th>
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
                  {formatCurrency(product.productVariants[0].price)}/
                  {product.unit}
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
                    onClick={() => handleDeleteProduct(product._id)}
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
