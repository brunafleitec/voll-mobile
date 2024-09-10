import { Image, Text, VStack, Box, FormControl, Input, Button, Link } from "native-base";
import { TouchableOpacity } from "react-native";
import Logo from "../../assets/images/Logo.png";
import { Title } from "@/app/src/components/Title";

export default function Login({ navigation }: {navigation: any}) {
  return (
    <VStack flex={1} alignItems="center" justifyContent="center" p={5}>
      <Image source={Logo} alt="Logo Voll" />
      <Title>Faça login em sua conta</Title>
      <Box>
        <FormControl mt={3}>
          <FormControl.Label>E-mail</FormControl.Label>
          <Input placeholder="Seu e-mail" size="lg" w="100%" borderRadius="lg" bgColor="gray.100" shadow={3} />
        </FormControl>
        <FormControl mt={3}>
          <FormControl.Label>Senha</FormControl.Label>
          <Input placeholder="Sua senha" size="lg" w="100%" borderRadius="lg" bgColor="gray.100" shadow={3} />
        </FormControl>
      </Box>
      <Button w="100%" bg="blue.800" mt={10} borderRadius="lg" onPress={() => navigation.navigate("Tabs")}>
        Entrar
      </Button>
      <Link href="https://www.alura.com.br" mt={2}>
        Esqueceu sua senha?
      </Link>
      <Box w="100%" flexDirection="row" justifyContent="center" mt={8}>
        <Text>Ainda não tem cadastro? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Register/index")}>
          <Text color="blue.500">Faça seu cadastro</Text>
        </TouchableOpacity>
      </Box>
    </VStack>
  );
}
