import { Flex, Input, Button, Stack, FormLabel, FormControl } from '@chakra-ui/react';

export default function Home() {
  return (
    <Flex w="100vw" h="100vh" alignItems="center" justifyContent="center">
      <Flex
        as="form"
        width="100%"
        maxWidth="360px"
        p="8"
        bg="gray.800"
        borderRadius={8}
        flexDir="column"
      >
        <Stack spacing={4}>
          <FormControl>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
              id="email"
              name="email"
              type="email"
              focusBorderColor="pink.500"
              bgColor="gray.900"
              variant="filled"
              _hover={{
                bgColor: 'gray.700'
              }}
              placeholder="Email"
              size="lg"
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="password">Senha</FormLabel>
            <Input
              id="password"
              name="password"
              type="password"
              focusBorderColor="pink.500"
              bgColor="gray.900"
              variant="filled"
              _hover={{
                bgColor: 'gray.700'
              }}
              placeholder="Senha"
              size="lg"
            />
          </FormControl>
        </Stack>
        <Button 
          type="submit"
          colorScheme="pink"
          size="lg"
          mt="6"
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
