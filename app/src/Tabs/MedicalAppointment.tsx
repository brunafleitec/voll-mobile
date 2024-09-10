import { Divider, ScrollView } from "native-base";
import { Title } from "../components/Title";
import { ButtonScreen } from "../components/ButtonScreen";
import { AppointmentCard } from "../components/AppointmentCard";

export default function MedicalAppointment() {
  return (
    <ScrollView p={5}>
      <Title color="blue.500">
        Minhas consultas
      </Title>

      <ButtonScreen mt={5} mb={5}>
        Agendar nova consulta
      </ButtonScreen>

      <Title
        color="blue.500"
        fontSize="lg"
        alignSelf="flex-start"
        mb={2}
      >
        Próximas consultas
      </Title>

      <AppointmentCard
        name="Dr. André Cunha"
        medicalSpecialty="Cardiologia"
        photo="https://github.com/andreocunha.png"
        date="20/09/2024"
        wasScheduled
      />

      <Divider mt={5} />

      <Title
        color="blue.500"
        fontSize="lg"
        alignSelf="flex-start"
        mb={2}
      >
        Consultas passadas
      </Title>

      <AppointmentCard
        name="Dr. André Cunha"
        medicalSpecialty="Cardiologia"
        photo="https://github.com/andreocunha.png"
        date="28/08/2024"
        wasAttendedTo
      />
      <AppointmentCard
        name="Dr. André Cunha"
        medicalSpecialty="Cardiologia"
        photo="https://github.com/andreocunha.png"
        date="18/07/2024"
        wasAttendedTo
      />
      <AppointmentCard
        name="Dr. André Cunha"
        medicalSpecialty="Cardiologia"
        photo="https://github.com/andreocunha.png"
        date="08/07/2024"
        wasAttendedTo
      />
    </ScrollView>
  );
}