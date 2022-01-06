import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useBreakpointValue,
} from "@chakra-ui/react";
import Link from "next/link";
import { useEffect } from "react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";

import Header from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import Sidebar from "../../components/Sidebar";

export default function UserList() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  const date = new Date();
  const dateFomated = Intl.DateTimeFormat("pt-BR", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(date);

  useEffect(() => {
    fetch("http://localhost:3000/api/users")
    .then(res => res.json())
    .then(data => console.log(data))
  })

  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bgColor="gray.800" p="8">
          <Flex mb="8" justify="space-between" alignItems="center">
            <Heading size="lg" fontWeight="normal">
              Úsuarios
            </Heading>

            <Link href="/users/create" passHref>
              <Button
                as="a"
                size="sm"
                fontSize="16"
                colorScheme="pink"
                py="5"
                leftIcon={<Icon as={RiAddLine} />}
                cursor={"pointer"}
              >
                Criar novo
              </Button>
            </Link>
          </Flex>

          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px={["4", "4", "6"]} color="gray.300" w="8">
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>Úsuario</Th>
                {isWideVersion && <Th>Data de Cadastro</Th>}
                <Th w="8"></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px={["4", "4", "6"]}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Nicolas Teófilo</Text>
                    <Text fontSize="sm" color="gray.300">
                      nicolas@email.com.br
                    </Text>
                  </Box>
                </Td>
                {isWideVersion && (
                  <Td px="6">
                    <Text>{dateFomated}</Text>
                  </Td>
                )}
                {isWideVersion ? (
                  <Td>
                    <Button
                      as="a"
                      size="sm"
                      fontSize="15"
                      colorScheme="purple"
                      backgroundColor="gray.600"
                      leftIcon={<Icon as={RiPencilLine} />}
                      cursor={"pointer"}
                    >
                      {isWideVersion ? "Editar" : null}
                    </Button>
                </Td>
                ) : null }
              </Tr>
            </Tbody>
          </Table>

          <Pagination />
        </Box>
      </Flex>
    </Box>
  );
}
