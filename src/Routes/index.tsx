import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { useAuth } from '../context/AuthContext'
import { AuthRoutes } from './Auth'
import { GuestRoutes } from './Guest'

export function Routes() {
  const { authState } = useAuth()

  const navTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'transparent',
    },
  }
  console.log('Routes', authState?.authenticated)

  return (
    <NavigationContainer theme={navTheme}>
      {authState?.authenticated ? <AuthRoutes /> : <GuestRoutes />}
    </NavigationContainer>
  )
}
