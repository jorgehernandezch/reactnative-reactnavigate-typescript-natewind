import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Details } from '../screens/Details'
import { Payments } from '../screens/Payments'
import { DrawerRoutes } from './Drawer'

const Stack = createNativeStackNavigator()

export function AuthRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: '#FFFFFF',
        },
      }}
    >
      <Stack.Screen name="Start" component={DrawerRoutes} />
      <Stack.Screen name="details" component={Details} />
      <Stack.Screen name="payments" component={Payments} />
    </Stack.Navigator>
  )
}
