import React from 'react'
import { Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import type { ButtonProps } from '../../@types/components'

export const Button = ({
  onPress,
  text,
  extraClasses,
  loading,
  ...rest
}: ButtonProps) => {
  return (
    <TouchableOpacity
      className={`bg-slate-800 max-h-12 h-12 min-h-[48px] py-2 px-6 rounded-xl flex flex-row justify-center items-center
        ${extraClasses}
      `}
      onPress={onPress}
      {...rest}
    >
      <Text className="font-[latoBold] text-white uppercase">{text}</Text>
      {loading && (
        <ActivityIndicator size="small" color="#FFFFFF" className="ml-2" />
      )}
    </TouchableOpacity>
  )
}
