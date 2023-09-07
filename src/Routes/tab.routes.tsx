import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home } from '../screens/Home'
import { Profile } from '../screens/Profile'
import { Feather } from '@expo/vector-icons'

const Tab = createBottomTabNavigator()

export const TabRoutes = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ tabBarIcon: () => <Feather name="home" /> }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{ tabBarIcon: () => <Feather name="disc" /> }}
      />
    </Tab.Navigator>
  )
}
