import { Text, View } from 'react-native'
import { Button } from '../../components/Button'
import { useAuth } from '../../context/AuthContext'

export const Home = ({ navigation }: { navigation: any }) => {
  const { onLogout } = useAuth()
  return (
    <View className="flex-1 bg-white">
      <Button
        className="bg-sky-700 mb-4"
        onPress={() => navigation.navigate('Details')}
      >
        <Text className="text-sky-100 font-[latoBold]">Details</Text>
      </Button>
      <Button className="bg-sky-700" onPress={onLogout}>
        <Text className="text-sky-100">Sair</Text>
      </Button>
      <Text className="text-sky-700 text-lg font-bold uppercase mb-1 mt-4">
        SYSTEM FONTS
      </Text>
      <Text className="font-normal text-blue-500 text-lg font-[latoThin]">
        LATO THIN
      </Text>
      <Text className="font-normal text-blue-500 text-lg font-[latoLight]">
        LATO LIGHT
      </Text>
      <Text className="font-normal text-blue-500 text-lg font-[latoRegular]">
        LATO REGULAR
      </Text>
      <Text className="font-normal text-blue-500 text-lg font-[latoBold]">
        LATO BOLD
      </Text>
      <Text className="font-normal text-blue-500 text-lg font-[montserratRegular]">
        MONTSERRAT REGULAR
      </Text>
    </View>
  )
}
