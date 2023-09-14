import { View } from 'react-native'
import { type PageGuestProps } from '../../@types/components'

export const PageAuth = ({ children }: PageGuestProps) => {
  return <View className="flex-1 w-full">{children}</View>
}
