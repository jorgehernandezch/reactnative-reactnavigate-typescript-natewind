import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useAuth } from '../context/AuthContext'
import { Login } from '../screens/Login'
import { AuthRoutes } from './Auth'

export function Routes() {
  const Stack = createNativeStackNavigator()
  const { authState } = useAuth()

  console.log('Routes', authState?.authenticated)

  return (
    <NavigationContainer>
      {authState?.authenticated ? (
        <AuthRoutes />
      ) : (
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  )
}
