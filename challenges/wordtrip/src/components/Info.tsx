import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

export function Info() {
  return (
    <Box
      w="100%"
      height="300px"
      backgroundImage="url('/images/background.png')"
    >
        <Flex
            justifyContent="space-around"
            height="100%"
            alignItems="center"
        >
            <Box
                p={4}
            >
                <Heading fontSize="4xl" fontWeight="normal" color="gray.100">
                5 Continentes,
                </Heading>
                <Heading mt="2" fontSize="4xl" fontWeight="normal" color="gray.100">
                infinitas possibilidades
                </Heading>
                <Text
                    color="whiteAlpha.600"
                    mt="4"
                >
                Chegou a hora de tirar do papel a viagem que você <br /> sempre sonhou. 
                </Text>
            </Box>
            <Box
                mt="16"
            >
                <Image src="/images/airplane.svg" alt="avião" />
            </Box>
        </Flex>
    </Box>
  );
}
