import { LinearGradient } from 'expo-linear-gradient'
import { type BackgroundProps } from '../../@types/components'

export function Background({ children }: BackgroundProps) {
  return (
    <LinearGradient className="flex-1 p-2" colors={['#FF0', '#FF0FF3']}>
      {children}
    </LinearGradient>
  )
}
