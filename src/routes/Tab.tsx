import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home } from '../screens/Home'
import { Profile } from '../screens/Profile'
import { Feather } from '@expo/vector-icons'
import { Platform } from 'react-native'

const Tab = createBottomTabNavigator()

export const TabRoutes = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          shadowOffset: {
            width: 0,
            height: 12,
          },
          shadowOpacity: 0.58,
          shadowRadius: 16.0,
          elevation: 24,
          borderTopLeftRadius: 21,
          borderTopRightRadius: 21,
          backgroundColor: '#fff',
          position: 'absolute',
          bottom: 0,
          padding: Platform.OS === 'ios' ? 10 : 5,
          width: '100%',
          height: Platform.OS === 'ios' ? 50 : 70,
          zIndex: 0,
        },
      }}
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="home"
              size={24}
              color={focused ? '#2d4f6c' : '#333333'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="disc"
              size={24}
              color={focused ? '#2d4f6c' : '#333333'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  )
}
