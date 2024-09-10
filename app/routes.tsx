import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./src/screens/Login";
import Register from "./src/screens/Register";
import Tabs from "./src/Tabs";

const Stack = createNativeStackNavigator();

export default function RootLayout() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Login/index" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Register/index" component={Register} options={{ headerShown: false }} />
        <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
      </Stack.Navigator>
  );
}
