import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';
import { Button } from '../../components/Button';


export function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pagina Home</Text>
      <Button/>
    </View>
  );
}