import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screens/Home";
import { Login } from "../screens/Login";

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
        name="Home"
        component={Home}
      />
    </Navigator>
  );
}