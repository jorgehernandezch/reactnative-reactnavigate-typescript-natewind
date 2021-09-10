import React, { ReactNode } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { style } from "./styles";
import { theme } from "../../assets/styles/theme";

type Props ={
  children: ReactNode;
}

export function Background({children}:Props){

  return(
    <LinearGradient
      style={style.container}
      colors={[theme.colors.primary,theme.colors.primary]}
    >
      {children}
    </LinearGradient>
  )
}