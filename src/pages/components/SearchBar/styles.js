import { StyleSheet } from 'react-native'
import { colors, fonts, metrics} from '../../../styles';

    

  const styles = StyleSheet.create({
        searchBarContainer:  {                
            flexDirection: 'row',
            alignItems: 'flex-end',
            padding:6,
            backgroundColor: colors.primary, 
            borderWidth: 0,
            borderTopWidth: 0,
            borderBottomWidth: 0,         
        },
        subContainerSearch:{
          flex:1,
          flexDirection:'row',
          padding:4,
          backgroundColor: colors.white, 
          height: 40,
          alignItems: 'center',         
          borderRadius: 10,
          justifyContent: 'center', 
        },

        checkIcon_left: {    
          color: colors.primary, 
          paddingLeft:6,                  
        },

        search_cor_BLUE:{
          color: colors.lighter,
        },
        
        search_cor_primary:{
          color: colors.primary,
        },
        

        checkIcon_right: {     
          alignItems:'center',             
          color: colors.primary, 
          padding: 6,         
        },
        
        searchBarText: {          
          backgroundColor: 'white',
          fontSize: fonts.small, 
          height: 40,
          color: colors.regular,    
        },
        
        textViewCancelar:{      
          padding: 10
        },
        
        labelStyle : {
          flex:1, 
          left: 0,
          fontSize: fonts.small, 
        }

          })

    export default styles