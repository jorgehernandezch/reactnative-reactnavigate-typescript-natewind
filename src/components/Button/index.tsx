import React from 'react'
import { TouchableOpacity } from 'react-native'
import { styled } from 'nativewind'

interface Props {
  onPress?: () => void
  children: JSX.Element
}

function ButtonStyled({ onPress, children, ...rest }: Props) {
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

const Button = styled(ButtonStyled)
export { Button }
