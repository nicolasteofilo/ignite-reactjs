import { Box, Flex, Heading, Image } from "@chakra-ui/react";

interface ItemProps {
  name: string;
  pathIcon: string;
  width: string;
}

export function Item({ name, pathIcon, width }: ItemProps) {
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      px={16}
    >
      <Box w="100" h="20">
        <Image src={`${pathIcon}`} alt={name} w={width} />
      </Box>
      <Heading textAlign="center" fontSize="2xl" fontWeight="medium">
        {name}
      </Heading>
    </Flex>
  );
}
