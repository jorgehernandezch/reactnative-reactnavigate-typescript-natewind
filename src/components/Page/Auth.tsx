import { View, ScrollView } from 'react-native'
import { type PageAuthProps } from '../../@types/components'
import { HeaderPages } from '../Header/Pages'
import { HeaderHome } from '../Header/Home'

export const PageAuth = ({ children, page, onPress }: PageAuthProps) => {
  return (
    <View className="flex-1 w-full">
      {page === 'Home' ? (
        <HeaderHome onPress={onPress} />
      ) : (
        <HeaderPages onPress={onPress} page={page} />
      )}
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="flex-1 px-6 pt-3"
      >
        {children}
        <View className="h-24"></View>
      </ScrollView>
    </View>
  )
}
