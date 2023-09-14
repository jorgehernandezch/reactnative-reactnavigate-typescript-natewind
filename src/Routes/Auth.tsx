import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Details } from '../screens/Details'
import { TabRoutes } from './Tab'

const Stack = createNativeStackNavigator()

export function AuthRoutes() {
  return (
    <Stack.Navigator
      initialRouteName="Inicio"
      screenOptions={{
        headerShown: true,
        contentStyle: {
          backgroundColor: '#FF0000',
        },
      }}
    >
      <Stack.Screen name="Inicio" component={TabRoutes} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  )
}
