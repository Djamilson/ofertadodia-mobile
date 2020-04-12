import { StyleSheet } from "react-native";

import { colors, fonts, metrics } from "../../styles";

export default (styles = StyleSheet.create({
  containe: { flex: 1, top: 10 },

  container: {
    flex: 1,
    backgroundColor: "#eee",
    alignItems: "center",
    justifyContent: "center",
    padding: 15
  },
  card: {
    marginTop: -180,
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
    padding: 10
  },
  textData: {
    fontSize: fonts.small,
    color: colors.light,
    marginTop: 0
  },
  
  textLabel: {
    fontSize: fonts.small,
     marginTop: 0
  },
  wrapTextNome:{
    flexDirection: 'row',    
  },
  wrapTextMensagem:{
    marginTop: 10
  },
  textMensagem:{
    fontSize: fonts.small,
    marginTop: 0,
   justifyContent: "flex-start"    
  }

}));
