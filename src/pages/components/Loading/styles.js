import { StyleSheet } from "react-native";
import { colors, fonts } from "../../../styles";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  horizontal: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    color: colors.primary,
    alignItems: "center",  

  },
  text:{
    padding: 20
  },

  icon: {
    color: colors.primary
  },

  title: {
    fontSize: fonts.small,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default styles;
