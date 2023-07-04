import React, { ReactNode } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { theme } from "../../assets/styles/theme";

type Props ={
  children: ReactNode;
}

export function Background({children}:Props){

  return(
    <LinearGradient
      className="flex-1 p-6"
      colors={[theme.colors.white,theme.colors.white]}
    >
      {children}
    </LinearGradient>
  )
}