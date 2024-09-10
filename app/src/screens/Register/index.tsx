import { Image, Box, Checkbox, ScrollView, Text } from "native-base";
import Logo from "../../assets/Logo.png";
import { Title } from "@/app/src/components/Title";
import { InputText } from "@/app/src/components/InputText";
import { useState } from "react";
import { ButtonScreen } from "../../components/ButtonScreen";
import { sections } from "@/app/src/utils/InputRegisterText";

export default function Register() {
  const [ numSection, setNumSection ] = useState(0);

  function handleNextSection() {
    if (numSection < sections.length - 1) {
      setNumSection(numSection + 1);
    }
  }

  function handleBackSection() {
    if (numSection > 0) {
      setNumSection(numSection - 1);
    }
  }

  return (
    <ScrollView flex={1} p={5}>
      <Image source={Logo} alt="Logo Voll" alignSelf="center" />
      <Title>{sections[numSection].title}</Title>
      <Box>
        {
          sections[numSection]?.inputs?.map(input => {
            return <InputText label={input.label} placeholder={input.placeholder} key={input.id} />
          })
        }
      </Box>
      <Box>
        <Text color="blue.800" fontWeight="bold" fontSize="md" mt={2} mb={2}>
          Selecione o plano:
        </Text>
        {
          sections[numSection].checkbox.map(checkbox => {
            return (
                <Checkbox key={checkbox.id} value={checkbox.value}>{checkbox.value}</Checkbox>
            );
          })
        }
      </Box>
      {numSection > 0 && <ButtonScreen onPress={handleBackSection} bgColor="gray.400">
        Voltar
      </ButtonScreen>}
      <ButtonScreen onPress={handleNextSection} mt={4} mb={20}>
        Avançar
      </ButtonScreen>
    </ScrollView>
  );
}
