import { LinearGradient } from 'expo-linear-gradient'
import { type BackgroundProps } from '../../@types/components'

export function Background({ children }: BackgroundProps) {
  return (
    <LinearGradient className="flex-1 p-6" colors={['#FFFFFF', '#FFFFFF']}>
      {children}
    </LinearGradient>
  )
}
