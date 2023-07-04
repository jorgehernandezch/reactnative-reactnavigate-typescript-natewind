import React from "react";
import { Text, View } from "react-native";
import { Button } from "../../components/Button";

export const Home = ({navigation}:{navigation:any}) => {
  return(
    <View className="flex-1 bg-white">
      <Text className="text-sky-700 text-xl font-bold uppercase mb-6">Home Page</Text>      
      <Text className="text-sky-700 text-md font-medium uppercase mb-1">Go Details Page</Text>      
      <Button className="bg-sky-700"onPress={()=>navigation.navigate('Details')}>
        <Text className="text-sky-100">Details</Text>
      </Button>
    </View>
  )
}