import { Feather } from "@expo/vector-icons"
import { Text, View } from "react-native"

export const Details = ({navigation}:{navigation:any}) => {
  return(
    <View className="flex-1">
      <View className="flex flex-row justify-between items-center">
        <Feather name="arrow-left" onPress={()=>navigation.goBack()} size={20} />
        <Text className="text-sky-700 text-xl font-bold uppercase">Profile Page</Text>  
        <View className="w-3"></View>
      </View>
    </View>
  )
}