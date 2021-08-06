import { StyleSheet } from "react-native";
import { theme } from "../../assets/styles/theme";

export const styles = StyleSheet.create({
  primary:{
    width:170,
    height: 'auto',
    backgroundColor: theme.colors.primaryButton,
    padding: 16,
    margin:5,
    borderRadius:8,
    justifyContent:'center',
    alignItems: 'center',
    display: 'flex'
  },
  text:{
    color:theme.colors.primary,
    fontSize:16,
    fontFamily:theme.fonts.title400
  }
});