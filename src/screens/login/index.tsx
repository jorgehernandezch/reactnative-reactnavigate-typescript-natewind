import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';
import { Button } from '../../components/Button';
import { useNavigation } from '@react-navigation/native';

export function Login() {
  
  const navigation = useNavigation();

  function handleLogin(){
    navigation.navigate("Home")
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Grupo Alpha</Text>
      <Button onPress={handleLogin}/>
    </View>
  );
}