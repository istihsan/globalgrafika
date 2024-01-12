import {
  Flex,
  Heading,
  Card,
  CardHeader,
  CardBody,
  Text,
  SimpleGrid,
  Box,
  VStack,
  Divider
} from "@chakra-ui/react";
import React from "react";
import "@fontsource/staatliches";

export default function DashboardMain() {
  return (
    <Flex justify={"center"} align={"center"} minW={"100%"} my={"1.5%"}>
      <VStack>
        <Heading fontFamily={"Staatliches"} letterSpacing={"10px"} mt={"1%"}>
          Dashboard
        </Heading>
        <Divider
          mb={5}
          maxW={"85%"}
          mx={"auto"}
          borderColor={"blackAlpha.400"}
        />
        <Box minW={"100%"} mt={"2%"} justify={"center"} align={"center"}>
          <SimpleGrid
            maxW={"70%"}
            spacing={4}
            columns={4}
            templateColumns="repeat(4, 1fr)"
          >
            <Card>
              <CardHeader>
                <Heading size="md"> Customer dashboard</Heading>
              </CardHeader>
              <CardBody>
                <Text>
                  View a summary of all your customers over the last month.
                </Text>
              </CardBody>
            </Card>
            <Card>
              <CardHeader>
                <Heading size="md"> Customer dashboard</Heading>
              </CardHeader>
              <CardBody>
                <Text>
                  View a summary of all your customers over the last month.
                </Text>
              </CardBody>
            </Card>
            <Card>
              <CardHeader>
                <Heading size="md"> Customer dashboard</Heading>
              </CardHeader>
              <CardBody>
                <Text>
                  View a summary of all your customers over the last month.
                </Text>
              </CardBody>
            </Card>
            <Card>
              <CardHeader>
                <Heading size="md"> Customer dashboard</Heading>
              </CardHeader>
              <CardBody>
                <Text>
                  View a summary of all your customers over the last month.
                </Text>
              </CardBody>
            </Card>
          </SimpleGrid>
        </Box>
      </VStack>
    </Flex>
  );
}
