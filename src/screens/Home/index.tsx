import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';
import { Button } from '../../components/Button';
import { useNavigation } from '@react-navigation/native';

export function Home() {

  const navigation = useNavigation();

  function handleHome(){
    navigation.navigate("Login")
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pagina Home</Text>
      <Button text="Voltar Login" onPress={handleHome}/>
    </View>
  );
}