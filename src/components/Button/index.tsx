import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export function Button() {
  return(
    <TouchableOpacity style={styles.button}>
      <Text>Button</Text>
    </TouchableOpacity>
  );
}