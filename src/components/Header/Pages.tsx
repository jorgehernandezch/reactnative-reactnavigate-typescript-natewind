import { Feather } from '@expo/vector-icons'
import { Text, View } from 'react-native'
import { type HeaderProps } from '../../@types/components'
import { useAuth } from '../../context/AuthContext'

export const HeaderPages = ({ onPress, page }: HeaderProps) => {
  const { onLogout } = useAuth()
  return (
    <View className="flex flex-row justify-between items-center py-4 px-4">
      <Feather name="arrow-left" size={20} color="black" onPress={onPress} />
      <Text className="font-[latoBold] text-base text-sky-700 uppercase">
        {page}
      </Text>
      <Feather name="log-out" size={20} color="black" onPress={onLogout} />
    </View>
  )
}
