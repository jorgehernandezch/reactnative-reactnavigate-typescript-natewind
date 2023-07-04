import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "../screens/Login";
import { TabRoutes } from "./tab.routes";

const { Navigator, Screen } = createNativeStackNavigator();

export function AuthRoutes(){
  return(
    <Navigator
      screenOptions={{
        headerShown: false,
        contentStyle:{
          backgroundColor: 'transparent'
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
    </Navigator>
  );
}