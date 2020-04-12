import { StyleSheet, Dimensions } from 'react-native';
import { colors, fonts, metrics } from '../../../../styles';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 3,
    width: (width - 20) / 2,
    shadowColor: colors.light,
    shadowRadius: 2,
    shadowOpacity: 0.1,
    shadowOffset: { x: 0, y: 0 },
    alignSelf: 'flex-start',
    marginBottom: metrics.padding,
    marginRight: metrics.padding -10,
    marginLeft: 5,    
    },

  checkIcon: {
    position: 'absolute',
    right: metrics.padding,
    top: metrics.padding,
    color: colors.primary,
    zIndex: 1,
  },

  imageContainer: {
    padding: metrics.padding,
  },

  espacamentoVertical: {
    flexDirection: 'column',   
    justifyContent: 'center',
    alignItems: 'stretch',
    paddingTop: 6,
  },

  image: {
    width: '100%',
    height: 100,
    resizeMode: 'contain',
  },

  infoContainer: {
    padding: metrics.padding,
    borderTopWidth: 1,
    borderColor: colors.lighter,
  },

  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: colors.darker,
  },

  description: {
    textAlign: 'center',
    color: colors.dark,
    fontSize: fonts.smaller,
  },

  descontoView:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around'   
  },

  descontoTitle: {
    fontSize: fonts.smaller,  
    color: colors.primary, 
  },

  desconto:{
    color: colors.primary,  
  },

  dePriceView:{
    flex: 1,
    flexDirection: 'row',
    marginTop: 5,
    justifyContent: 'space-around',    
    backgroundColor: colors.bluer,      
    paddingBottom: metrics.padding_price,
    paddingLeft: metrics.padding_price,
    paddingTop: metrics.padding_price,
    paddingRight: metrics.padding_price,
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
    fontSize: fonts.regular,     
    textDecorationLine: 'line-through', 
    textDecorationStyle: 'solid'       
  },
  
  
  porPriceView:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: colors.primary,
    paddingBottom: metrics.padding_price,
    paddingLeft: metrics.padding_price,
    paddingTop: metrics.padding_price,
    paddingRight: metrics.padding_price,
  },

  porPrice: {    
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.white,
    fontSize: fonts.regular,
  },
  
  
  porPriceTitle: {
    textAlign: 'center',
    color: colors.white,
    fontSize: fonts.small,
  },

});

export default styles;
