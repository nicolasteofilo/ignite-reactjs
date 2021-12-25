import { Flex, Text, Input, Icon, HStack, Box, Image, Avatar } from '@chakra-ui/react';
import { RiSearchLine, RiNotificationLine, RiUserAddLine } from 'react-icons/ri';

interface HeaderProps {
}

export default function Header({}: HeaderProps) {
  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      <Text
        fontSize="3xl"
        fontWeight="bold"
        letterSpacing="tighter"
        alignItems="center"
        w="64"
      >
        dashgo <Text as="span" ml="1" fontSize="5xl" color="pink.500">.</Text>
      </Text>

      <Flex
        as="label"
        flex="1"
        py="4"
        px="8"
        ml="6"
        maxWidth={400}
        alignSelf="center"
        color="gray.200"
        position="relative"
        bg="gray.800"
        borderRadius="full"
      >
        <Input
          color="gray.50"
          variant="unstyled" // sem borda nem backgroud
          px="4"
          mr="4"
          placeholder="Buscar na plataforma"
          _placeholder={{
            color: 'gray.400',
          }}
        />
        <Icon as={RiSearchLine} fontSize="20" />
      </Flex>

      <Flex
        align="center"
        ml="auto"
      >
        <HStack
          spacing="8"
          mx="4"
          pr="8"
          py="1"
          color="gray.300"
          borderRightWidth={1}
          borderColor="gray.700"
        >
          <Icon as={RiNotificationLine} fontSize="20" />
          <Icon as={RiUserAddLine} fontSize="20" />
        </HStack>

        <Flex align="center">
          <Box mr="4" textAlign="right">
            <Text>Nicolas Teófilo</Text>
            <Text color="gray.300" fontSize="small" >nicolas@email.com.br</Text>
          </Box>
          <Avatar size="md" name="Nicolas Teófilo" src="https://github.com/nicolasteofilo.png" />
        </Flex>
      </Flex>
    </Flex>
  )
}