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
        <DashboardSidebar />
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
        <Flex align="center" me={"3"}>
          <Avatar
            size="md"
            name="Istihsan Bismo"
            src="https://bit.ly/sage-adebayo"
            mr="5"
            mt="2"
          />
          <Divider orientation="vertical" />
          <Text
            mr="2"
            mt="1"
            fontFamily={"Bebas Neue"}
            letterSpacing="10px"
            fontSize="18px"
            color="#969493"
          >
            Istihsan Bismo
          </Text>
          <IconButton
            icon={<FiBell />}
            variant="ghost"
            fontSize="lg"
            aria-label="Notifications"
            mr="2"
            color="#f6f6f4"
          />
          <IconButton
            icon={<FiSettings />}
            variant="ghost"
            fontSize="lg"
            aria-label="Settings"
            color="blackAlpha.800"
          />
        </Flex>
      </Flex>
    </Box>
  );
};

export default DashboardNav;
