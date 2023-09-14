import { LinearGradient } from 'expo-linear-gradient'
import { type BackgroundProps } from '../../@types/components'

export function Background({ children }: BackgroundProps) {
  return (
    <LinearGradient className="flex-1" colors={['transparent', 'transparent']}>
      {children}
    </LinearGradient>
  )
}
