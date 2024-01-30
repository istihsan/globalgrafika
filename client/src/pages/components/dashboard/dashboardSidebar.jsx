import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  Button,
  Text,
  Center,
  Divider
} from "@chakra-ui/react";
import { AddIcon, HamburgerIcon } from "@chakra-ui/icons";
import DashboardSidebarCard from "./dashboardSidebarCard";
import BGImage from "../../../images/1.jpg";

function DashboardSidebar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Button
        ref={btnRef}
        bgGradient={"linear(to-l,  #4a4a4a, #696969, #969493, #c9c8c7 )"}
        onClick={onOpen}
      >
        <HamburgerIcon />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bgImage={BGImage} minW={"29%"}>
          <DrawerBody
            mt={2}
            overflow="scroll"
            sx={{ "::-webkit-scrollbar": { display: "none" } }}
          >
            <DashboardSidebarCard />
          </DrawerBody>
          <DrawerFooter bgImage={BGImage}>
            <Button variant="outline" color={"white"} mr={3} onClick={onClose}>
              Close
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default DashboardSidebar;
