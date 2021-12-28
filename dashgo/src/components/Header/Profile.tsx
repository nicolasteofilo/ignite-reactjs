import { Avatar, Box, Flex, Text } from '@chakra-ui/react'

interface ProfileProps {
  showProfileData?: boolean
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      { showProfileData && (
          <Box mr="4" textAlign="right">
            <Text>Nicolas Teófilo</Text>
            <Text color="gray.300" fontSize="small" >nicolas@email.com.br</Text>
          </Box>
      ) }
      <Avatar size="md" name="Nicolas Teófilo" src="https://github.com/nicolasteofilo.png" />
    </Flex>
  );
}