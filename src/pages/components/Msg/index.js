/* Core */
import React from 'react';

/* Presentational */
import { Text, View } from 'react-native';

import styles from './styles';


const Msg = (props) => {
  return (
            
    <View
          
          style={[
            styles.container, 
            props.style,
            props.type ? styles[`button-${props.type}`] : {},
          ]}
                >
                <Text style={[
                  styles.text,
                  props.type ? styles[`text-${props.type}`] : {},
                ]}>
                  { props.children }
                </Text>
      
      </View>
  )
}

export default Msg;
