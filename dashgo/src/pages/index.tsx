import { Flex, Button, Stack } from "@chakra-ui/react";
import { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "../components/Form/Input";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";   


type SingInFormData = {
  email: string;
  password: string;
};

const singInFormShema = yup.object().shape({
  email: yup.string().email('E-mail inválido').required('E-mail é obrigatório'),
  password: yup.string().required('Senha obrigatória'),
});

export default function SingIn() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: yupResolver(singInFormShema),
  });

  const handleSingIn: SubmitHandler<SingInFormData> = async (values) => {
    console.log(values);
  };
  useEffect(() => {
    console.log(errors);
  }, [errors]);


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
          <Input
            name="email"
            type="email"
            label="E-mail"
            error={errors.email}
            {...register("email")}
          />
          <Input
            name="password"
            type="password"
            label="Password"
            error={errors.password}
            {...register("password")}
          />
        </Stack>
        <Button
          type="submit"
          colorScheme="pink"
          size="lg"
          mt="6"
          isLoading={isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
