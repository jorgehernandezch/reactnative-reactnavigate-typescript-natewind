import { NavigationContainer } from '@react-navigation/native'
import { useAuth } from '../context/AuthContext'
import { AuthRoutes } from './Auth'
import { GuestRoutes } from './Guest'

export function Routes() {
  const { authState } = useAuth()

  console.log('Routes', authState?.authenticated)

  return (
    <NavigationContainer>
      {authState?.authenticated ? <AuthRoutes /> : <GuestRoutes />}
    </NavigationContainer>
  )
}
