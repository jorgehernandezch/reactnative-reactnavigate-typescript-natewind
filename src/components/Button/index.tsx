import React from 'react'
import { TouchableOpacity } from 'react-native'
import type { ButtonProps } from '../../@types/components'

export const Button = ({ onPress, children, ...rest }: ButtonProps) => {
  return (
    <TouchableOpacity
      className="flex justify-center items-center p-4 min-w-[90px] rounded-md"
      onPress={onPress}
      {...rest}
    >
      {children}
    </TouchableOpacity>
  )
}
