import {
  Box,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  useDisclosure,
  Slide,
  SimpleGrid,
  Link
} from "@chakra-ui/react";
import { ReactElement } from "react";
import {
  FcAbout,
  FcAssistant,
  FcCollaboration,
  FcDonate,
  FcManager
} from "react-icons/fc";

interface CardProps {
  heading: string[];
  description: string[];
  icon: ReactElement[];
  href: string[];
}

const Card = ({ heading, description, icon, href, slideDesc }: CardProps) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box
      bg={"#edf3f8"}
      as={Link}
      href={href}
      maxW={{ base: "full", md: "275px" }}
      w={"full"}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={8}
      onMouseEnter={onToggle}
      onMouseLeave={onToggle}
      transform="scale(1)"
      transition={"transform 0.3s ease-in-out"}
      _hover={{
        cursor: "pointer",
        backgroundColor: "#dce6f3",
        transform: "scale(1.1)"
      }}
    >
      <Stack align={"start"} spacing={2}>
        <Flex
          w={16}
          h={16}
          align={"center"}
          justify={"center"}
          color={"white"}
          rounded={"full"}
        >
          {icon}
        </Flex>
        <Box mt={2}>
          <Heading size="md">{heading}</Heading>
          <Text mt={1} fontSize={"sm"}>
            {description}
          </Text>
        </Box>
      </Stack>
      <Slide direction="bottom" in={isOpen} style={{ zIndex: 10 }}>
        <Box
          p="40px"
          color="white"
          mt="4"
          bg="#0078C2"
          rounded="md"
          shadow="md"
        >
          <Text>{slideDesc}</Text>
        </Box>
      </Slide>
    </Box>
  );
};

export default function WhyUs() {
  const { onToggle } = useDisclosure();
  return (
    <Box p={4}>
      <Container maxW={"5xl"} mt={12}>
        <Flex flexWrap="wrap" gridGap={6} justify="center">
          <SimpleGrid spacing={4} columns={4} templateColumns="repeat(1, 1fr)">
            <Card
              heading={"Dashboard Utama"}
              as={Link}
              icon={<Icon as={FcDonate} w={10} h={10} />}
              description={"Statistika Perusahaan Global Grafika"}
              href={"/dashboard"}
              onToggle={onToggle}
              slideDesc={
                "Lihat Statistika Perusahaan Global Grafika. Mulai dari produk, pesanan, serta pilihan lain"
              }
            />
            <Card
              heading={"Dashboard Produk"}
              as={Link}
              icon={<Icon as={FcCollaboration} w={10} h={10} />}
              description={"Produk Perusahaan Global Grafika"}
              href={"/dashboard"}
              onToggle={onToggle}
              slideDesc={
                "Lihat, Edit, dan Hapus Produk Perusahaan Global Grafika. Mulai dari produk, pesanan, serta pilihan lain"
              }
            />
            <Card
              heading={"Dashboard Order"}
              as={Link}
              icon={<Icon as={FcAssistant} w={10} h={10} />}
              description={"Pesanan Pelanggan Perusahaan Global Grafika"}
              href={"/dashboard/order"}
              onToggle={onToggle}
              slideDesc={
                "Lihat, Edit, dan Ulas Pesanan Perusahaan Global Grafika. Mulai dari ganti status, ulas kembali dan lainnya"
              }
            />
          </SimpleGrid>
        </Flex>
      </Container>
    </Box>
  );
}
