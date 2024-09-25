import { Image, Text, VStack, Box, Link, useToast } from "native-base";
import { TouchableOpacity } from "react-native";
import Logo from "../../assets/Logo.png";
import { Title } from "@/app/src/components/Title";
import { useEffect, useState } from "react";
import { login } from "../../services/authenticationService";
import { InputText } from "../../components/InputText";
import { ButtonScreen } from "../../components/ButtonScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { jwtDecode } from "jwt-decode";

export default function Login({ navigation }: any) {
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ loading, setLoading ] = useState(true);
  const toast = useToast();
  
  useEffect(() => {
    async function verifyLogin() {
      const token = await AsyncStorage.getItem("token");
      if (token) {
        navigation.replace("Tabs");
      }
      setLoading(false);
    }
    verifyLogin();
  }, []);

  async function handleLogin() {
    const result = await login(email, password);

    if (result) {
      const { token } = result;

      AsyncStorage.setItem("token", token);

      const decodedToken = jwtDecode(token) as any;
      const patientId = decodedToken.id;

      AsyncStorage.setItem("patientId", patientId);
      
      navigation.replace("Tabs");
    } else {
      toast.show({
        title: "Erro no login",
        description: "O e-mail ou senha não conferem",
        backgroundColor: "red.500"
      });
    }
  }

  if (loading) {
    return null;
  }

  return (
    <VStack flex={1} alignItems="center" justifyContent="center" p={5}>
      <Image source={Logo} alt="Logo Voll" />
      <Title>Faça login em sua conta</Title>
      <Box>
        <InputText
          label="Email"
          placeholder="Digite seu e-mail"
          value={email}
          onChangeText={setEmail}
        />
        <InputText
          label="Senha"
          placeholder="Digite sua senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </Box>
      <ButtonScreen onPress={handleLogin}>
        Entrar
      </ButtonScreen>
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
