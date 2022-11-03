import React,{ useEffect, useCallback } from 'react';
import { StatusBar, SafeAreaView } from 'react-native';
import { useFonts } from 'expo-font';
import { Lato_100Thin, Lato_300Light, Lato_400Regular, Lato_700Bold } from '@expo-google-fonts/lato';
import { Routes } from './src/Routes';
import * as SplashScreen from 'expo-splash-screen';

export default function App() {

  const [fontsLoaded] = useFonts({
    Lato_100Thin,
    Lato_300Light,
    Lato_400Regular,
    Lato_700Bold
  });

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
      } catch (e) {
        console.warn(e);
      }
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <SafeAreaView  style={{ flex: 1 }} onLayout={onLayoutRootView}>
        <StatusBar 
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        <Routes/>
      </SafeAreaView>
    </>
  );
}