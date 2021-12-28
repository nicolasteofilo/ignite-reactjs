import { Text } from "@chakra-ui/react";

export function Logo() {
  return (
    <Text
    fontSize="3xl"
    fontWeight="bold"
    letterSpacing="tighter"
    alignItems="center"
    w="64"
  >
    dashgo <Text as="span" ml="1" fontSize="5xl" color="pink.500">.</Text>
  </Text>
  );
}