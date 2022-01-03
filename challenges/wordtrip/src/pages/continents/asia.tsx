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
        bgImage={`url('https://images.prismic.io/worldtripcms/b32bc28b-239f-4deb-a3f3-6c6456c24c26_andre-benz-MsMISAIe8Qw-unsplash.jpg?auto=compress,format')`}
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
          Ásia
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
              A Ásia é o maior dos continentes, tanto em área como em população. Abrange um terço das partes sólidas da superfície da Terra e é responsável por abrigar quase três quintos da população mundial. A Ásia faz fronteira no lado ocidental com a África e com a Europa, e no lado oriental com o oceano Pacífico. O ponto extremo setentrional do continente está localizado no oceano Glacial Ártico.
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
                  48
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
                  2.3
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
                  3
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
            name="Tokyo"
            country="Japan"
            image="https://images.prismic.io/worldtripcms/73ffb583-49c8-493b-8dbd-9ff886e9dad8_jezael-melgoza-layMbSJ3YOE-unsplash.jpg?auto=compress,format"
            flag="https://images.prismic.io/worldtripcms/e1a52693-7d54-4e38-965b-9b0fa3191050_1024px-Flag_of_Japan.svg.png?auto=compress,format"
            key="Tokyo"
          />
          <City
            name="Beijing"
            country="China"
            image="https://images.prismic.io/worldtripcms/82fead83-d40f-45c7-9eba-9245150f9add_li-yang-oS2MSW5ipH0-unsplash.jpg?auto=compress,format"
            flag="https://images.prismic.io/worldtripcms/19d69a07-69ef-41b2-8892-47a8dc6a0b73_1200px-Flag_of_the_People%27s_Republic_of_China.svg.png?auto=compress,format"
            key="Beijing"
          />
      </Grid>
      </Box>
    </>
  );
}
