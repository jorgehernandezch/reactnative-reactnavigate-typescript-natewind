import 'react-native-gesture-handler'
import React, { useEffect, useCallback } from 'react'
import { StatusBar, SafeAreaView, Platform } from 'react-native'
import { useFonts } from 'expo-font'
import {
  Lato_100Thin,
  Lato_300Light,
  Lato_400Regular,
  Lato_700Bold,
} from '@expo-google-fonts/lato'
import {
  Montserrat_400Regular,
  Montserrat_700Bold,
} from '@expo-google-fonts/montserrat'
import { Routes } from './src/routes'
import * as SplashScreen from 'expo-splash-screen'
import { AuthProvider } from './src/context/AuthContext'
import { Background } from './src/components/Background'

export default function App() {
  const [fontsLoaded] = useFonts({
    latoThin: Lato_100Thin,
    latoLight: Lato_300Light,
    latoRegular: Lato_400Regular,
    latoBold: Lato_700Bold,
    montserratRegular: Montserrat_400Regular,
    montserratBold: Montserrat_700Bold,
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
        {Platform.OS === 'android' ? (
          <StatusBar
            backgroundColor="#61dafb"
            translucent
            barStyle="dark-content"
          />
        ) : (
          <StatusBar barStyle="dark-content" />
        )}
        <Background>
          <Routes />
        </Background>
      </SafeAreaView>
    </AuthProvider>
  )
}
