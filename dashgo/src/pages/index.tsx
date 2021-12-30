import { Flex, Button, Stack } from '@chakra-ui/react';
import { useForm, SubmitHandler } from 'react-hook-form'
import { Input } from '../components/Form/Input';

type SingInFormData = {
  email: string;
  password: string;
}

export default function SingIn() {
  const { register, handleSubmit, formState } = useForm();

  const handleSingIn: SubmitHandler<SingInFormData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log(values)
  }

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
        onSubmit={handleSubmit(handleSingIn)}
      >
        <Stack spacing={4}>
          <Input name="email" type="email" label="E-mail" {...register('email')}  />
          <Input name="password" type="password" label="Password" {...register('password')} />
        </Stack>
        <Button 
          type="submit"
          colorScheme="pink"
          size="lg"
          mt="6"
          isLoading={formState.isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
