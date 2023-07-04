import { View, Text, Button } from "react-native"

export const Login = ({ navigation }:{navigation:any}) => {
  return(
    <View className="flex-1 justify-center items-center">
      <Text className="text-white text-lg">Login</Text>
      <Button title="Entrar" onPress={() => navigation.navigate("Inicio")} />
    </View>
  )
}