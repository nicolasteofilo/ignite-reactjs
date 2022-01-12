import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";

import Header from "../components/Header";
import { Sidebar } from "../components/Sidebar";

import { options, series } from "../utils/optionsChart";

import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export default function Dashboard() {
  return (
    <Flex direction="column" h="100vh">
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start">
          <Box p={["2", "8"]} bg="gray.800" borderRadius={8} pb="4">
            <Text fontSize="large" mb="4">
              Inscritos da semana
            </Text>
            <Chart type="area" height={160} options={options} series={series} />
          </Box>
          <Box p={["2", "8"]} bg="gray.800" borderRadius={8} pb="4">
            <Text fontSize="large" mb="4">
              Taxa de abertura
            </Text>
            <Chart type="area" height={160} options={options} series={series} />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}
