import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import type { ButtonProps } from '../../@types/components'

export const Button = ({
  onPress,
  text,
  extraClasses,
  ...rest
}: ButtonProps) => {
  return (
    <TouchableOpacity
      className={`bg-slate-800 max-h-10 h-10 py-2 px-6 rounded-xl flex flex-row justify-center items-center flex-1
        ${extraClasses}
      `}
      onPress={onPress}
      {...rest}
    >
      <Text className="font-[latoBold] text-white uppercase">{text}</Text>
    </TouchableOpacity>
  )
}
