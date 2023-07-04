import { View, Text} from "react-native"
import { Button } from "../../components/Button"
export const Login = ({ navigation }:{navigation:any}) => {
  return(
    <View className="flex-1 justify-center items-center">
      <Text className="text-sky-700 font-extrabold text-xl text-center uppercase mb-3">
        React Native
      </Text>
      <Text className="text-sky-700 text-md font-semibold uppercase text-center mb-2">
        with
      </Text>
      <Text className="text-sky-700 text-md font-semibold uppercase text-center mb-16">
        React Navigation,Typescript and NativeWind
      </Text>
      <Text className="text-black font-semibold text-lg uppercase mb-2">Login Page</Text>
      <Button className="bg-sky-700" onPress={()=>navigation.navigate('Inicio')}>
        <Text className="text-sky-100 font-bold uppercase">Sign In</Text>
      </Button>
    </View>
  )
}