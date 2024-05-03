import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Login } from '../screens/Login'

const Stack = createNativeStackNavigator()

export function GuestRoutes() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: '#FFFFFF',
        },
      }}
    >
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  )
}
