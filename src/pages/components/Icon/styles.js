import { StyleSheet } from 'react-native';
import { colors, fonts, metrics } from '../../../styles';

const styles = StyleSheet.create({

  container: {
    height: 21,
    backgroundColor: colors.primary,
    borderRadius: 19,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 1,
  },

  'button-outline': {
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

  checkIcon: {
    position: 'absolute',
    right: metrics.padding,
    top: 115,
    color: colors.primary,
    zIndex: 1,
  },

  checkIconColor: {
    color: colors.primary, 
  },
});

export default styles;
