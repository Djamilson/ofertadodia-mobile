import { StyleSheet } from "react-native";
import { colors, fonts, metrics } from "../../../styles";

export default (styles = StyleSheet.create({
  main: { flex: 1, padding: 20 },

  container: {
    flex: 1,
    backgroundColor: "#eee",
    alignItems: "center",
    justifyContent: "center",
    padding: 15
  },
  profileInfo:{    
    paddingLeft:20,
    paddingBottom:20
  },
  card: {
    backgroundColor: "white",
    borderRadius: 2,
    elevation: 1
  },
  topBorder: {
    backgroundColor: colors.primary,
    height: 5,
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2
  },
  inner: {
    alignItems: "center",
    padding: 20
  },

  textData: {
    fontSize: fonts.small,
    color: colors.light,
    marginTop: 0
  },

  productTitle: {
    fontWeight: "bold",
    fontSize: fonts.big,
    color: colors.darker,
    marginTop: 5
  },

  productTitle_: {
    fontWeight: "bold",
    fontSize: fonts.big,
    color: colors.primary,
    marginTop: 5
  },
  inner_: {
    alignItems: "flex-start",
    padding: 20
  }
}));