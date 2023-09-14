import { View, Text, TextInput } from 'react-native'
import { Controller } from 'react-hook-form'
import { AntDesign } from '@expo/vector-icons'
import { type ControlledInputProps } from '../../@types/components'

export const ControlledInput = ({
  control,
  name,
  icon,
  required,
  error,
  label,
  valor,
  ...rest
}: ControlledInputProps) => {
  return (
    <>
      <Controller
        name={name}
        control={control}
        rules={{
          required,
        }}
        defaultValue={valor}
        render={({ field: { value, onChange } }) => (
          <>
            {label && (
              <Text className="text-azul-700 text-sm mb-1 font-[montserratRegular]">
                {label} {required && <Text className="text-red-600">*</Text>}
              </Text>
            )}
            <View className="relative mb-0">
              <View className="absolute top-2 left-2 w-10 h-10 z-10">
                <AntDesign name={icon} size={24} color="#D2D6DA" />
              </View>
              <TextInput
                className={`border-[1px] rounded-md h-10 w-full bg-white px-3 py-2 mb-1 pl-10
                  ${error ? 'border-red-200' : 'border-cinza-50'}
                `}
                value={value}
                onChangeText={onChange}
                {...rest}
              />
            </View>
          </>
        )}
      />
      {error && (
        <Text className="text-red-500 mb-2">O campo {label} é requerido.</Text>
      )}
    </>
  )
}
