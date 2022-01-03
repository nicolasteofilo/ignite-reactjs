import {
  Box,
  Flex,
  Grid,
  Heading,
  Icon,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  Text,
} from "@chakra-ui/react";
import { RiInformationLine } from "react-icons/ri";
import City from "../../components/City";

export default function europe() {
  return (
    <>
      <Flex
        w="100%"
        h={["150px", "300px", "500px"]}
        px={["0", "0", "36"]}
        pt={["0", "0", "72"]}
        bgImage={`url('https://images.prismic.io/worldtripcms/0e5b495c-76f4-468c-a8a4-d7cd22dfb6c1_pedro-lastra-5g8dJvtYRYA-unsplash.jpg?auto=compress,format"')`}
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        align="center"
        justify={["center", "center", "flex-start"]}
      >
        <Heading
          textAlign={["center", "left"]}
          fontSize={["1.75rem", "5xl"]}
          color="gray.100"
          fontWeight="500"
        >
          Europa
        </Heading>
      </Flex>
      <Box>
        <Flex direction="column" maxW="1160px" mx="auto" mb="10" px="1rem">
          <Grid
            templateColumns={["1fr", "1fr", "1fr 1fr", "1.2fr 1fr"]}
            gap={[5, 10, 16, 20]}
            my={["8", "20"]}
          >
            <Text
              fontSize={["lg", "xl", "xl", "2xl"]}
              color="gray.700"
              textAlign="justify"
            >
              A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
            </Text>
            <Flex alignItems="center" justifyContent="space-between">
              <Flex
                direction="column"
                justify="center"
                align={["flex-start", "flex-start", "center"]}
              >
                <Heading
                  fontSize={["2xl", "5xl"]}
                  color="yellow.400"
                  fontWeight="500"
                >
                  50
                </Heading>
                <Text fontWeight="500" fontSize={["md", "xl"]} color="gray.700">
                  países
                </Text>
              </Flex>

              <Flex
                direction="column"
                justify="center"
                align={["flex-start", "flex-start", "center"]}
              >
                <Heading
                  fontSize={["2xl", "5xl"]}
                  color="yellow.400"
                  fontWeight="500"
                >
                  60
                </Heading>
                <Text fontWeight="500" fontSize={["md", "xl"]} color="gray.700">
                  línguas
                </Text>
              </Flex>

              <Flex
                direction="column"
                justify="center"
                align={["flex-start", "flex-start", "center"]}
              >
                <Heading
                  fontSize={["2xl", "5xl"]}
                  color="yellow.400"
                  fontWeight="500"
                >
                  27
                </Heading>
                <Text fontWeight="500" fontSize={["md", "xl"]} color="gray.700">
                  cidades +100
                  <Popover>
                    <PopoverTrigger>
                      <span>
                        <Icon
                          cursor="pointer"
                          as={RiInformationLine}
                          ml="1"
                          color="gray.400"
                          w={["10px", "16px"]}
                          h={["10px", "16px"]}
                        />
                      </span>
                    </PopoverTrigger>
                    <PopoverContent bg="gray.700" color="yellow.400">
                      <PopoverArrow bg="gray.700" />
                      <PopoverCloseButton />
                      <PopoverBody fontWeight="400" fontSize="lg">
                        <Text fontWeight="500" fontSize="lg">
                          Cidades
                        </Text>
                      </PopoverBody>
                    </PopoverContent>
                  </Popover>
                </Text>
              </Flex>
            </Flex>
          </Grid>
        </Flex>
      </Box>
      <Box maxW="1160px" mx="auto" mb="10" px="1rem">
      <Heading fontWeight="500" fontSize={["2xl","4xl"]} mb="10">Cidades +100</Heading>
      <Grid templateColumns={["1fr","1fr 1fr", "repeat(3, 1fr)", "repeat(4, 1fr)"]} gap={['20px','45px']} alignItems="center" justifyContent="center" px={["30px", "0"]}>
          <City
            name="Londres"
            country="Reino Unido"
            image="https://images.prismic.io/worldtripcms/cce1f282-0b9f-4c57-8c42-a7da9689413e_charles-postiaux-Q6UehpkBSnQ-unsplash.jpg?auto=compress,format"
            flag="https://images.prismic.io/worldtripcms/3de66eba-6794-4d27-8cd3-2a44ab186746_1_Cq55pULfLn558iZiZea9Og.png?auto=compress,format"
            key="Londres"
          />
          <City
            name="Paris"
            country="França"
            image="https://images.prismic.io/worldtripcms/254ede96-fc7e-476e-8a1b-4fc4a1cb7d0d_chris-karidis-nnzkZNYWHaU-unsplash.jpg?auto=compress,format"
            flag="https://images.prismic.io/worldtripcms/9f1b1eba-4e6b-46b2-8763-54724818b02f_frana_a.jpg?auto=compress,format"
            key="Paris"
          />
          <City
            name="Roma"
            country="Itália"
            image="https://images.prismic.io/worldtripcms/d3fb7cbe-8344-42d5-95d1-07f067d98fdb_daniel-basso-KkvuOf2iKpE-unsplash.jpg?auto=compress,format"
            flag="https://images.prismic.io/worldtripcms/b554ad5a-22f6-4b74-a7dc-1dd563d4e422_Bandeira-da-Italia.png?auto=compress,format"
            key="Roma"
          />
      </Grid>
      </Box>
    </>
  );
}
