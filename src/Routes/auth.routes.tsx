import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "../screens/Login";
import { Details } from "../screens/Details";
import { TabRoutes } from "./tab.routes";
import { theme } from "../assets/styles/theme";

const { Navigator, Screen } = createNativeStackNavigator();

export function AuthRoutes(){
  return(
    <Navigator
      screenOptions={{
        headerShown: false,
        contentStyle:{
          backgroundColor: theme.colors.white
        }
      }}
      
    >
      <Screen 
        name="Login"
        component={Login}
      />
      <Screen 
        name="Inicio"
        component={TabRoutes}
      />
      <Screen
        name="Details"
        component={Details}
      />
    </Navigator>
  );
}