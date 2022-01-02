import { Box, Flex, Heading } from "@chakra-ui/react";

import { Item } from "./Item";

export function TravelTypes() {
  return (
    <Box w="100%" height="250px">
      <Flex justifyContent="center" height="100%" alignItems="center">
        <Item
          name="vida noturna"
          pathIcon="/images/icons/cocktail.svg"
          width="14"
        />
        <Item name="praia" pathIcon="/images/icons/surf.svg" width="16" />
        <Item name="moderno" pathIcon="/images/icons/building.svg" width="12" />
        <Item name="clássico" pathIcon="/images/icons/museum.svg" width="16" />
        <Item name="e mais..." pathIcon="/images/icons/earth.svg" width="14" />
      </Flex>
    </Box>
  );
}
