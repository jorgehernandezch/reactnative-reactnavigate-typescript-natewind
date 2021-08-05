import React from 'react';
import { Text, View, StatusBar } from 'react-native';
import { styles } from './style';
import { Button } from '../../components/Button';


export function Login() {
  return (
    <View style={styles.container}>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Text style={styles.text}>Test</Text>
      <Button/>
    </View>
  );
}