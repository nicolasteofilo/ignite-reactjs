import { Flex, Image } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="100px"
      mx="auto"
      mt="4"
      align="center"
      justify="center"
    >
      <Image src="/images/logo.svg" w="36" />
    </Flex>
  );
}
