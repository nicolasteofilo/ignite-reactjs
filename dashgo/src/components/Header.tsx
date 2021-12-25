import { Flex, Text, Input, Icon } from '@chakra-ui/react';
import { RiSearchLine } from 'react-icons/ri';

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
    </Flex>
  )
}