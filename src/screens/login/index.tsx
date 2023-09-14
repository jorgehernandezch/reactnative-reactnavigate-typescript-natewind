import { View, Text, TextInput } from 'react-native'
import { Button } from '../../components/Button'
import { useState } from 'react'
import { useAuth } from '../../context/AuthContext'

export const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { onLogin } = useAuth()

  const login = async () => {
    const result = await onLogin!(email, password)
    if (result?.error) {
      alert(result.msg)
    }
  }

  return (
    <View className="flex-1 justify-center items-center">
      <TextInput
        onChangeText={(text: string) => {
          setEmail(text)
        }}
        value={email}
        className="w-48 h-12 bg-slate-300"
      />
      <TextInput
        placeholder="password"
        secureTextEntry={true}
        onChangeText={(text: string) => {
          setPassword(text)
        }}
        value={password}
        className="w-48 h-12 bg-slate-300"
      />
      <Button onPress={login} className="bg-cyan-600">
        <Text className="font-montserrat font-normal uppercase">Entrar</Text>
      </Button>
    </View>
  )
}
