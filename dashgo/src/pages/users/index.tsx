import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";

import Header from "../../components/Header";
import Pagination from "../../components/Pagination";
import Sidebar from "../../components/Sidebar";

export default function UserList() {
  const date = new Date();
  const dateFomated = Intl.DateTimeFormat("pt-BR", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(date);

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
              fontSize="16"
              colorScheme="pink"
              py="5"
              leftIcon={<Icon as={RiAddLine} />}
              cursor={'pointer'}
              >Criar novo</Button>
          </Flex>

          <Table
            colorScheme='whiteAlpha'
          >
            <Thead>
              <Tr>
                <Th px="6" color="gray.300" w="8">
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>
                  Úsuario
                </Th>
                <Th>
                  Data de Cadastro
                </Th>
                <Th w="8">
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Nicolas Teófilo</Text>
                    <Text fontSize="sm" color="gray.300">nicolas@email.com.br</Text>
                  </Box>
                </Td>
                <Td px="6">
                  <Text>{dateFomated}</Text>
                </Td>
                <Td>
                <Button
              as='a'
              size="sm"
              fontSize="15"
              colorScheme="purple"
              backgroundColor="gray.600"
              leftIcon={<Icon as={RiPencilLine} />}
              cursor={'pointer'}
              >Editar</Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>

          <Pagination />
        </Box>
      </Flex>
    </Box>
  )
}