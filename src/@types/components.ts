import { type ReactNode } from 'react'
import { type TouchableOpacityProps } from 'react-native'

export interface ButtonProps extends TouchableOpacityProps {
  onPress?: () => void
  children: JSX.Element
}

export interface BackgroundProps {
  children: ReactNode
}

export interface AuthProps {
  authState?: {
    token: string | null
    authenticated: boolean | null
  }
  onRegister?: (email: string, password: string) => Promise<any>
  onLogin?: (email: string, password: string) => Promise<any>
  onLogout?: () => Promise<any>
}

export interface AuthStateProps {
  token: string | null
  authenticated: boolean | null
}
