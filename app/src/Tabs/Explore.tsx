import { VStack, Box, ScrollView } from "native-base";
import { InputText } from "../components/InputText";
import { ButtonScreen } from "../components/ButtonScreen";
import { Title } from "../components/Title";
import { AppointmentCard } from "../components/AppointmentCard";

export default function Explore(){
  return (
    <ScrollView flex={1} bgColor="white">
      <VStack flex={1} alignItems="flex-start" justifyContent="flex-start" p={5}>
        <Box w="100%" borderRadius="lg" p={3} mt={5} shadow={1} borderRightRadius="md">
          <InputText
            placeholder="Digite a especialidade"
          />
          <InputText
            placeholder="Digite sua localização"
          />
          <ButtonScreen mt={3} mb={3}>
            Buscar
          </ButtonScreen>
        </Box>

        <Title color="blue.500" alignSelf="center">
          Resultado da Busca
        </Title>
        {[1, 2, 3].map((_, index) => (
          <VStack flex={1} w="100%" alignItems="flex-start" bgColor="white" key={index}>
            <AppointmentCard 
              medicalSpecialty="Cardiologia"
              photo="https://github.com/andreocunha.png"
              name="Dr. Cunha"
            />
          </VStack>
        ))}
      </VStack>
    </ScrollView>
  );
}