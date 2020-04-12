import { StyleSheet } from "react-native";
import { colors, fonts, metrics } from "../../styles";

export default (styles = StyleSheet.create({
  error: {
    color: colors.red
  },

  textAreaContainer: {
    borderColor: colors.lighter,
    backgroundColor: colors.white,
    borderWidth: 1,
    padding: 10, 
    alignItems: 'flex-start',
    height: 194,
    textAlignVertical: "top"
  },

  distanciaTop: {
    marginTop: -80
  },

  styleInput: {
    paddingLeft: 10,
    height: 40,
    backgroundColor: colors.white,
    borderColor: colors.lighter,
    borderWidth: 1
  },
  container: {
    flex: 1,
    flexDirection: "row",
    padding: 20,
    backgroundColor: "#F8F8FA"
  },
  
  textInput: {
    paddingLeft: 10,
    fontSize: 17,
    flex: 1,
    backgroundColor: "white",
    borderWidth: 0
  },

  viewText: { padding: 7 }
}));
