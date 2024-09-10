import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import HomeScreen from "./HomeScreen";
import MedicalAppointment from "./MedicalAppointment";
import Explore from "./Explore";
import Profile from "./Profile";

const Tab = createBottomTabNavigator();

const screenOptions = {
  tabBarStyle: {
    backgroundColor: "#002851"
  },
  tabBarActiveTintColor: "#339CFF",
  tabBarInactiveTintColor: "#FFF"
}

const tabs = [
  {
    name: "Principal",
    component: HomeScreen,
    icon: "home"
  },
  {
    name: "Consultas",
    component: MedicalAppointment,
    icon: "calendar"
  },
  {
    name: "Explorar",
    component: Explore,
    icon: "search"
  },
  {
    name: "Perfil",
    component: Profile,
    icon: "person"
  }
]

export default function Tabs() {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      { tabs.map((tab) => (
          <Tab.Screen
            key={tab.name}
            name={tab.name}
            component={tab.component}
            options={{
              headerShown: false,
              tabBarIcon: ({ color, size }) => (
                <Ionicons name={tab.icon} color={color} size={size} />
              )
            }}
          />
        ))
      }
    </Tab.Navigator>
  );
}