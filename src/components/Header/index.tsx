import { Feather } from '@expo/vector-icons'
import { Text, View } from 'react-native'
import { type HeaderProps } from '../../@types/components'
import { useAuth } from '../../context/AuthContext'

export const Header = ({ page, navigation }: HeaderProps) => {
  const { onLogout } = useAuth()
  return (
    <View className="flex flex-row justify-between items-center py-4 px-4">
      {page !== 'Home' ? (
        <Feather
          name="arrow-left"
          onPress={() => navigation.goBack()}
          size={20}
        />
      ) : (
        <View className="w-3"></View>
      )}
      <Text className="text-sky-700 text-xl font-[latoRegular] font-bold uppercase">
        {page ?? ''}
      </Text>
      {page === 'Home' ? (
        <Feather name="log-out" size={24} color="black" onPress={onLogout} />
      ) : (
        <View className="w-3"></View>
      )}
    </View>
  )
}
