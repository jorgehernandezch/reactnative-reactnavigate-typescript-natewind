import { Text, View } from 'react-native'
import { Button } from '../../components/Button'
import { useAuth } from '../../context/AuthContext'

export const Home = ({ navigation }: { navigation: any }) => {
  const { onLogout } = useAuth()
  return (
    <View className="flex-1 bg-emerald-300">
      <Button onPress={() => navigation.navigate('Details')} text="Details" />
      <Button onPress={onLogout} text="Sair" />

      <Text className="font-[latoBold] text-sky-700 text-2xl uppercase mb-1 mt-4">
        SYSTEM FONTS
      </Text>
      <Text className="font-[latoBold] text-black mt-4 text-2xl">
        LATO FONT
      </Text>
      <Text className="font-normal text-blue-500 text-lg font-[latoThin]">
        LATO THIN (100)
      </Text>
      <Text className="font-normal text-blue-500 text-lg font-[latoLight]">
        LATO LIGHT (300)
      </Text>
      <Text className="font-normal text-blue-500 text-lg font-[latoRegular]">
        LATO REGULAR (400)
      </Text>
      <Text className="font-normal text-blue-500 text-lg font-[latoBold]">
        LATO BOLD (700)
      </Text>
      <Text className="font-[montserratBold] text-black mt-4 text-2xl">
        MONTSERRAT FONT
      </Text>
      <Text className="font-normal text-blue-500 text-lg font-[montserratRegular]">
        MONTSERRAT REGULAR (400)
      </Text>
      <Text className="font-normal text-blue-500 text-lg font-[montserratBold]">
        MONTSERRAT BOLD (700)
      </Text>
    </View>
  )
}
