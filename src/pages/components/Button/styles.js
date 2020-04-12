import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../../styles';

const styles = StyleSheet.create({

  container: {
    height: 31,
    backgroundColor: colors.primary,
    borderRadius: 5,//android
    // borderRadius: 30 //ios
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
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
});

export default styles;
