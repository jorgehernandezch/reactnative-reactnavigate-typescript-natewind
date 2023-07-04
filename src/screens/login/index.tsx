import { View, Text, Button } from "react-native"

export const Login = ({ navigation }:{navigation:any}) => {
  return(
    <View>
      <Text>Login</Text>
      <Button title="Entrar" onPress={() => navigation.navigate("Inicio")} />
    </View>
  )
}