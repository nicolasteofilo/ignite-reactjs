import { Avatar, Box, Flex, Text } from '@chakra-ui/react'

export function Profile() {
  return (
    <Flex align="center">
          <Box mr="4" textAlign="right">
            <Text>Nicolas Teófilo</Text>
            <Text color="gray.300" fontSize="small" >nicolas@email.com.br</Text>
          </Box>
          <Avatar size="md" name="Nicolas Teófilo" src="https://github.com/nicolasteofilo.png" />
        </Flex>
  );
}