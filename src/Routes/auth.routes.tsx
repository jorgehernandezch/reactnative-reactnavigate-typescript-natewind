import { Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "../screens/Login";
import { Details } from "../screens/Details";
import { TabRoutes } from "./tab.routes";
import { theme } from "../assets/styles/theme";
import { Button } from "../components/Button";
import { useAuth } from "../context/AuthContext";

const Stack = createNativeStackNavigator();

export function AuthRoutes(){
  return(
    <Stack.Navigator
    initialRouteName="Inicio"
      screenOptions={{
        headerShown: true,
        contentStyle:{
          backgroundColor: theme.colors.white
        }
      }}
      
    >
      <Stack.Screen 
        name="Inicio"
        component={TabRoutes}
      />
      <Stack.Screen
        name="Details"
        component={Details}
      />
    </Stack.Navigator>
  );
}