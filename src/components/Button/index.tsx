import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

type Props ={
  onPress?:()=>void,
  text:string
}

export function Button({onPress, text}:Props) {
  return(
    <TouchableOpacity onPress={onPress} style={styles.primary}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}