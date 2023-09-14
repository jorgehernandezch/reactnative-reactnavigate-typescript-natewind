import { Feather } from '@expo/vector-icons'
import { Text, View, TouchableOpacity } from 'react-native'
import { type HeaderProps } from '../../@types/components'
import { useAuth } from '../../context/AuthContext'

export const HeaderHome = ({ page, onPress }: HeaderProps) => {
  const { onLogout } = useAuth()
  return (
    <View className="flex flex-row justify-between items-center py-4 px-4">
      <View className="w-1/2 flex flex-row justify-start items-center">
        <TouchableOpacity
          className="w-10 h-10 rounded-full bg-slate-400 flex justify-center items-center"
          onPress={onPress}
        ></TouchableOpacity>
        <View className="ml-3">
          <Text>Hello Jorge</Text>
          <Text>Welcome Back</Text>
        </View>
      </View>
      <View className="w-1/2 flex flex-row justify-end items-center gap-3">
        <Feather name="bell" size={20} color="black" />
        <Feather name="settings" size={20} color="black" />
        <Feather name="log-out" size={20} color="black" onPress={onLogout} />
      </View>
    </View>
  )
}
