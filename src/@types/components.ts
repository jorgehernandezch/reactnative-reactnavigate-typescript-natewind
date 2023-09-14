import { type ReactNode } from 'react'
import { type TouchableOpacityProps, type TextInputProps } from 'react-native'
import { type Control } from 'react-hook-form'
import { type AntDesign } from '@expo/vector-icons'

export interface ButtonProps extends TouchableOpacityProps {
  onPress?: () => void
  text: string
  extraClasses?: React.ComponentProps<'div'>['className']
  loading?: boolean
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

export interface ControlledInputProps extends TextInputProps {
  control: Control<any>
  name: string
  icon?: React.ComponentProps<typeof AntDesign>['name']
  error: boolean
  required?: boolean
  label?: string
  valor?: string
}

export interface FormLoginDataProps {
  email: string
  password: string
}

export interface PageGuestProps {
  children: ReactNode
}
