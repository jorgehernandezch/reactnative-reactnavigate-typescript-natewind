import { StyleSheet} from "react-native";
import { theme } from "../../assets/styles/theme";

export const styles = StyleSheet.create({
  container:{
    flex: 1
  },
  text:{
    color: theme.colors.principalText,
    fontFamily: theme.fonts.title400,
    fontSize:24,
  }
});