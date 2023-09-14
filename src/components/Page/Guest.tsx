import { View } from 'react-native'
import { type PageGuestProps } from '../../@types/components'

export const PageGuest = ({ children }: PageGuestProps) => {
  return (
    <View className="flex-1 flex justify-center items-center w-full px-6">
      {children}
    </View>
  )
}
