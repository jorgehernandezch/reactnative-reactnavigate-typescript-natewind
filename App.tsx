import React from 'react';
import { StatusBar } from 'react-native';
import { useFonts } from 'expo-font';
import { Lato_100Thin, Lato_300Light, Lato_400Regular, Lato_700Bold } from '@expo-google-fonts/lato';
import { Home } from './src/screens/Home';
import AppLoading from 'expo-app-loading';
import { Background } from './src/components/Background';

export default function App() {

  const [fontsLoaded] = useFonts({
    Lato_100Thin,
    Lato_300Light,
    Lato_400Regular,
    Lato_700Bold
  });

  if(!fontsLoaded){
    return <AppLoading />
  }

  return (
    <Background>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Home/>
    </Background>
  );
}