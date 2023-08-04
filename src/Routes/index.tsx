import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { AuthRoutes } from "./auth.routes";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useAuth } from "../context/AuthContext";
import { Login } from "../screens/Login";
import { Home } from "../screens/Home";
import { Button } from "../components/Button";

export function Routes(){
  const Stack = createNativeStackNavigator();
  const { authState } = useAuth();

  return(
    <NavigationContainer>
      {authState?.authenticated ?
        <AuthRoutes/>
      :
        <Stack.Navigator>
          <Stack.Screen 
            name="Login"
            component={Login}
          />
        </Stack.Navigator>
      }
    </NavigationContainer>
  );
}