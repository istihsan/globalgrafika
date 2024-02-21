import React from "react";
import {
  Box,
  Flex,
  Text,
  Spacer,
  Avatar,
  IconButton,
  Heading,
  Divider
} from "@chakra-ui/react";
import { FiBell, FiSettings } from "react-icons/fi"; // You can import other icons as needed
import DashboardSidebar from "./dashboardSidebar";
import BGImage from "../../../images/6.jpg";

const DashboardNav = () => {
  return (
    <Box bgImage={BGImage} p="4" boxShadow="md" minW={"25%"}>
      <Flex align="center">
        <Heading
          ps="2%"
          mt="1"
          size="xl"
          bgClip={"text"}
          bgGradient={"linear(to-r,  #4a4a4a, #696969, #969493, #c9c8c7 )"}
          fontFamily={"Bebas Neue"}
        >
          Global Grafika
        </Heading>
        <Spacer />
        <DashboardSidebar />
      </Flex>
    </Box>
  );
};

export default DashboardNav;
