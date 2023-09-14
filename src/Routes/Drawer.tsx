import { Feather } from '@expo/vector-icons'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { TabRoutes } from './Tab'
import { Payments } from '../screens/Payments'

const Drawer = createDrawerNavigator()

export const DrawerRoutes = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Drawer.Screen
        name="index"
        component={TabRoutes}
        options={{
          drawerIcon: () => <Feather name="home" size={20} color="black" />,
          drawerLabel: 'Home',
        }}
      />
      <Drawer.Screen
        name="payments"
        component={Payments}
        options={{
          drawerIcon: () => (
            <Feather name="dollar-sign" size={20} color="black" />
          ),
          drawerLabel: 'Payments',
        }}
      />
    </Drawer.Navigator>
  )
}
