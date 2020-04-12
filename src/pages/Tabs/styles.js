import { StyleSheet } from 'react-native';
import { colors, fonts, metrics } from '../../styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    height: metrics.tabBarHeight,
    paddingHorizontal: metrics.padding,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: colors.lighter,
  },

  icon: {
    color: colors.light,
  },

  active: {
    color: colors.primary,
  },

  selecionado: {
    borderRadius: 15,
    borderWidth: 0.8,
    borderColor: colors.primary,
    
    width: 30,
    height: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  main: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },

  mainIcon: {
    color: colors.primary,
  },

    
  iconStyle: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 5,    
  },
  
  textStyle: {
    fontSize: fonts.small,
  },

});

export default styles;
