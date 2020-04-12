import { StyleSheet } from 'react-native'
import { colors, fonts} from '../../../styles';

    const styles = StyleSheet.create(
        {

              container_: {
                flex: 1,
                justifyContent: 'center' 
              },

              container: {
                height: 51,
                backgroundColor: colors.primary,             
                justifyContent: 'center',
                alignItems: 'center',
                paddingHorizontal: 40,
              },
            

              horizontal: {
                flex:1,
                flexDirection: 'column',
                justifyContent: 'center',              
                color: colors.primary,
                alignItems: 'center',
              },

              icon: {
                color: colors.primary,
              },
            
             title : {
                 fontSize: fonts.small,                 
                 flexDirection: 'column',
                 alignItems:'center',
                 justifyContent: 'center'         
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
        }
      );

      export default styles;