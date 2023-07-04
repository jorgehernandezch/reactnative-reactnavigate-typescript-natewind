import React from "react";
import { Text, View } from "react-native";
import { Button } from "../../components/Button";
import { theme } from "../../assets/styles/theme";

export const Home = ({navigation}:{navigation:any}) => {
  return(
    <View className="flex-1 bg-white">
      <Text className="text-sky-700 text-xl font-bold uppercase mb-6">Home Page</Text>      
      <Text className="text-sky-700 text-lg uppercase mb-1" style={{ fontFamily:theme.fonts.body }}>
        Go Details Page
      </Text>      
      <Button className="bg-sky-700"onPress={()=>navigation.navigate('Details')}>
        <Text className="text-sky-100">Details</Text>
      </Button>
      <Text className="text-sky-700 text-lg font-bold uppercase mb-1 mt-4">
        SYSTEM FONTS
      </Text>
      <Text className="text-sky-700 text-lg font-bold uppercase mb-1 mt-4" style={{ fontFamily:theme.fonts.title700 }}>
        HOME PAGE - LATO 700
      </Text>
      <Text className="text-sky-700 text-lg font-bold uppercase mb-1" style={{ fontFamily:theme.fonts.title400 }}>
        HOME PAGE - LATO 400
      </Text>
      <Text className="text-sky-700 text-lg font-bold uppercase mb-1" style={{ fontFamily:theme.fonts.body }}>
        HOME PAGE - MONTSERRAT 400
      </Text>
    </View>
  )
}