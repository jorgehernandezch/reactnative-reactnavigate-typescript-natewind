import { View, TextInput, Alert } from 'react-native'
import { Button } from '../../components/Button'
import { useState } from 'react'
import { useAuth } from '../../context/AuthContext'

export const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { onLogin } = useAuth()

  const login = async () => {
    const result = await onLogin!(email, password)
    console.log('Index-13', result)
    if (result) {
      Alert.alert(result.message)
    }
  }

  return (
    <View className="flex-1 justify-center items-center bg-slate-500">
      <TextInput
        onChangeText={(text: string) => {
          setEmail(text)
        }}
        value={email}
        className="w-full h-12 bg-slate-300"
      />
      <TextInput
        placeholder="password"
        secureTextEntry={true}
        onChangeText={(text: string) => {
          setPassword(text)
        }}
        value={password}
        className="w-full h-12 bg-slate-300"
      />
      <Button onPress={login} text="Entrar" />
    </View>
  )
}
