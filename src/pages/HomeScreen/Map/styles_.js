import { StyleSheet } from "react-native";
import { colors, fonts, metrics } from "../../../styles";

const styles_ = StyleSheet.create({
  checkIcon_left: {
    color: colors.red
  },

  localizador: {
    marginTop: 16,
    marginBottom: 16,
  },

  selecionado: {
    borderRadius: 25,
    borderWidth: 0.7,
    borderColor: colors.red,
    width: 30.7,
    height: 30.7,
    backgroundColor: colors.white,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  }
});

export default styles_;
