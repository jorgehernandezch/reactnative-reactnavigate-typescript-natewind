import React from 'react';
import { Text, View, Image } from 'react-native';
import { styles } from './styles';
import { Button } from '../../components/Button';
import { useNavigation } from '@react-navigation/native';
import Logo from '../../assets/img/logo.png';

export function Login() {
  
  const navigation = useNavigation<any>();

  function handleLogin(){
    navigation.navigate("Home")
  }

  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logo} />
      <Text style={styles.text}>Grupo Alpha</Text>
      <Button text="Home" onPress={handleLogin}/>
    </View>
  );
}