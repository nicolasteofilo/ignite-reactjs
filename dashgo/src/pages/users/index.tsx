import { Box, Button, Flex, Heading, Icon, Table, Text } from "@chakra-ui/react";
import { RiAddLine } from "react-icons/ri";

import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";

export default function UserList() {
  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bgColor="gray.800" p="8">
          <Flex mb="8" justify="space-between" alignItems="center">
            <Heading size="lg" fontWeight="normal">Úsuarios</Heading>

            <Button
              as='a'
              size="sm"
              fontSize="sm"
              colorScheme="pink"
              leftIcon={<Icon as={RiAddLine} />}
              cursor={'pointer'}
              >Criar novo</Button>
          </Flex>

          <Table
            colorScheme={'whiteAlpha'}
          >

          </Table>
        </Box>
      </Flex>
    </Box>
  )
}