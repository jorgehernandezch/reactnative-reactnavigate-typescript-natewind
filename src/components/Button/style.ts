import { StyleSheet } from "react-native";
import { theme } from "../../assets/styles/theme";

export const styles = StyleSheet.create({
  button:{
    width:'auto',
    height: 'auto',
    backgroundColor: theme.colors.primaryButton,
    padding: 16,
    margin:5,
    borderRadius:8,
  }
});