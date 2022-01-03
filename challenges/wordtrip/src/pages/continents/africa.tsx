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
        bgImage={`url('https://images.prismic.io/worldtripcms/c21aa992-b331-429d-a7a0-5c6c4101d6e2_redcharlie-cnTYZThmdu0-unsplash.jpg?auto=compress,format')`}
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
          Africa
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
              A África é o terceiro continente mais extenso com cerca de 30
              milhões de quilômetros quadrados, cobrindo 20,3 % da área total da
              terra firme do planeta. É o segundo continente mais populoso da
              Terra (atrás da Ásia) com cerca de mil milhões de pessoas
              (estimativa para 2005), representando cerca de um sétimo da
              população do mundo, e 54 países independentes. Apresenta grande
              diversidade étnica, cultural, social e política. Dos trinta países
              mais pobres do mundo, pelo menos 21 são africanos.
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
                  54
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
                  2.143
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
                  14
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
            name="Marrakesh"
            country="Morocco"
            image="https://images.prismic.io/worldtripcms/f3482f8a-eab5-4fcd-829b-e539c882c832_annie-spratt-q8Dl7K6PyYM-unsplash.jpg?auto=compress,format"
            flag="https://images.prismic.io/worldtripcms/42517340-00a2-40b5-9d00-6bcccf4de83e_3df17a4b4e7ca4f88f831df6fc95d2eb.jpg?auto=compress,format"
            key="Marrakesh"
          />
          <City
            name="Luxor"
            country="Egypt"
            image="https://images.prismic.io/worldtripcms/5d2198fd-5420-45fa-8db8-a743d7c26abb_calin-stan-a8ZSKCBE1xk-unsplash.jpg?auto=compress,format"
            flag="https://images.prismic.io/worldtripcms/73f4db47-048d-40e7-be29-ada4e9fd9c16_1280px-Flag_of_Egypt.svg.png?auto=compress,format"
            key="Marrakesh"
          />
          <City
            name="Beirut"
            country="Lebanon"
            image="https://images.prismic.io/worldtripcms/f3482f8a-eab5-4fcd-829b-e539c882c832_annie-spratt-q8Dl7K6PyYM-unsplash.jpg?auto=compress,format"
            flag="https://images.prismic.io/worldtripcms/cbcfd614-78ad-4e1d-8919-0b0d7f568d38_lg_flag_LB.gif?auto=compress,format"
            key="Beirut"
          />
      </Grid>
      </Box>
    </>
  );
}
