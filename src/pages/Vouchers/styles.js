import { StyleSheet } from "react-native";
import { colors, fonts, metrics } from "../../styles";

export default (styles = StyleSheet.create({

  main:{ flex: 1, backgroundColor: '#F8F8FA',
  marginTop:20,
  paddingLeft: 20,
  paddingRight: 20,     
},

  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    paddingLeft: metrics.padding,
    paddingRight: metrics.padding,
    paddingBottom: metrics.padding,     
    backgroundColor: "#FFF",
    borderBottomWidth: 1,
   
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#DDD',

  },
  
  espacao_entre: {
    marginTop: 10,
    marginBottom: 10
  },
  espacao_top: {
    marginTop: metrics.padding
  },

  avatar: {
    flexDirection: "column",
    alignItems: "stretch",
    justifyContent: "center",
    marginTop: metrics.padding,
    padding: 1

  },

  profileInfo: {
    marginLeft: metrics.padding,
    paddingRight: 10,
    paddingTop: 10,
    justifyContent: 'center',
  },
  myText: {
    width: 150,
    marginBottom: 5,        
    fontSize: fonts.small,
    color: colors.light,
  },
  productTitle: {
    fontWeight: 'bold',
    fontSize: fonts.big,
    color: colors.darker,
    marginTop: 5,
  },
  textData:{
    fontSize: fonts.small,
    color: colors.light,
    marginTop: 0,
  },
  dePriceView:{
    flex: 1,
    flexDirection: 'row',
    marginTop: 5,
    justifyContent: 'space-around',    
    backgroundColor: colors.green,      
    paddingBottom: metrics.padding_price,
    paddingLeft: metrics.padding_price,
    paddingTop: metrics.padding_price,
    paddingRight: metrics.padding_price,
    borderRadius: 5,
    opacity:54,
  },
  dePriceTitle: {
    textAlign: 'center',
    color: colors.white,
    fontSize: fonts.small
  },

  dePrice: {    
    fontWeight: 'bold',
    textAlign: 'right',
    color: colors.white,
    fontSize: fonts.big,     
    textDecorationStyle: 'solid',
  },
  distanciaTop:{
    marginTop: 140
},
firstButton: {
  marginRight: 10,
},

descontoView: {    
  fontWeight: "bold",
  fontSize: fonts.big,
  backgroundColor: '#FFF',
  borderWidth: 1,
  borderColor: colors.primary,
},

text: {
  color: '#FFF',
  fontWeight: 'bold',
  fontSize: fonts.small,
},

'text-outline': {
  color: colors.primary,
},

containerDesconto: {
  flexDirection:'row',
  height: 31,
  backgroundColor: colors.blue,
  borderRadius: 5,//android
  // borderRadius: 30 //ios
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingHorizontal: 20,
},

}));
