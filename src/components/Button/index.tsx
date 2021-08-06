import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

type Props ={
  onPress?:()=>void
}

export function Button({onPress}:Props) {
  return(
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text>Button</Text>
    </TouchableOpacity>
  );
}