import { VStack, Text, ScrollView, Avatar, Divider } from "native-base";
import { Title } from "../components/Title";

export default function Profile() {
  return (
    <ScrollView flex={1}>
      <VStack flex={1} alignItems="center" p={5}>
        <Title color="blue.500">Meu Perfil</Title>

        <Avatar source={{ uri: "https://github.com/brunafleitec.png" }} mt={5} size="xl" />

        <Title color="blue.500">Informações pessoais</Title>
        <Title fontSize="lg" mb={1}>Bruna Ferreira</Title>
        <Text>12/11/1996</Text>
        <Text>Goiânia, Goiás</Text>

        <Divider mt={5} />

        <Title color="blue.500" mb={2}>Histórico médico</Title>
        <Text>Rinite alérgica</Text>
        <Text>Sinusite</Text>
      </VStack>
    </ScrollView>
  );
}