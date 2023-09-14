import { View, Alert } from 'react-native'
import { Button } from '../../components/Button'
import { useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import { useForm } from 'react-hook-form'
import { ControlledInput } from '../../components/ControlledInput'
import { PageGuest } from '../../components/Page/Guest'
import { type FormLoginDataProps } from '../../@types/components'

export const Login = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormLoginDataProps>()
  const { onLogin } = useAuth()
  const [loading, setLoading] = useState(false)

  const login = async (data: FormLoginDataProps) => {
    setLoading(true)
    const result = await onLogin!(data.email, data.password)
    console.log('Index-13', result)
    if (result) {
      setLoading(false)
      Alert.alert(result.message)
    }
  }

  return (
    <PageGuest>
      <View className="w-full">
        <View className="mb-2">
          <ControlledInput
            control={control}
            name="email"
            error={!!errors.email}
            required={true}
            placeholder="Your name"
            icon="mail"
            label="Name"
            autoCapitalize="none"
          />
        </View>
        <View className="mb-2">
          <ControlledInput
            control={control}
            name="password"
            error={!!errors.password}
            required={true}
            placeholder="Your password"
            icon="lock"
            label="Password"
            secureTextEntry
          />
        </View>
        <Button
          onPress={handleSubmit(login)}
          text="Sign In"
          loading={loading}
        />
      </View>
    </PageGuest>
  )
}
