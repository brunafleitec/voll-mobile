import { Text, Avatar, VStack } from "native-base";
import { ButtonScreen } from "./ButtonScreen";

interface CardProps {
  name: string;
  photo: string;
  medicalSpecialty: string;
  date?: string;
  wasAttendedTo?: boolean;
  wasScheduled?: boolean;
}

export function AppointmentCard({
  name,
  photo,
  medicalSpecialty,
  date,
  wasAttendedTo,
  wasScheduled
}: CardProps) {
  return (
    <VStack w="100%" bg={wasAttendedTo ? "blue.100" : "white"} p={5} borderRadius="lg" shadow={2} mb={5}>
      <VStack flexDir="row">
        <Avatar source={{ uri: photo }} size="lg" />

        <VStack pl={4}>
          <Text fontSize="md" bold>{name}</Text>
          <Text>{medicalSpecialty}</Text>
          <Text>{date}</Text>
        </VStack>
      </VStack>

      <ButtonScreen mt={4}>
        {wasScheduled ? "Cancelar" : "Agendar consulta"}
      </ButtonScreen>
    </VStack>
  );
}