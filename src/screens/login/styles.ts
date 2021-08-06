import { StyleSheet} from "react-native";
import Constants from 'expo-constants';
import { theme } from "../../assets/styles/theme";

export const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginTop: Constants.statusBarHeight + 20
  },
  text:{
    color: theme.colors.principalText,
    fontFamily: theme.fonts.title400,
    fontSize:24,
  }
});