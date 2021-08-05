import { StyleSheet } from "react-native";
import { theme } from '../../assets/styles/theme';

export const styles = StyleSheet.create({
  container:{
    backgroundColor: theme.colors.background,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text:{
    color: theme.colors.principalText
  }
});