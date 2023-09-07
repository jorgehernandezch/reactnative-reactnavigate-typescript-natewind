import 'react-native-gesture-handler'
import React, { useEffect, useCallback } from 'react'
import { StatusBar, SafeAreaView } from 'react-native'
import { useFonts } from 'expo-font'
import {
  Lato_100Thin,
  Lato_300Light,
  Lato_400Regular,
  Lato_700Bold,
} from '@expo-google-fonts/lato'
import { Montserrat_400Regular } from '@expo-google-fonts/montserrat'
import { Routes } from './src/routes'
import * as SplashScreen from 'expo-splash-screen'
import { AuthProvider } from './src/context/AuthContext'
import { Background } from './src/components/Background'

export default function App() {
  const [fontsLoaded] = useFonts({
    Lato_100Thin,
    Lato_300Light,
    Lato_400Regular,
    Lato_700Bold,
    Montserrat_400Regular,
  })

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync()
      } catch (e) {
        console.warn(e)
      }
    }
    prepare()
  }, [])

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  if (!fontsLoaded) {
    return null
  }

  return (
    <AuthProvider>
      <SafeAreaView style={{ flex: 1 }} onLayout={onLayoutRootView}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="transparent"
          translucent
        />
        <Background>
          <Routes />
        </Background>
      </SafeAreaView>
    </AuthProvider>
  )
}
