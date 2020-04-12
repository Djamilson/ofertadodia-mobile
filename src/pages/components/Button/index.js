/* Core */
import React from 'react';

/* Presentational */
import { Text, TouchableOpacity } from 'react-native';

import styles from './styles';


const Button = (props) => {
  return (
      <TouchableOpacity
          onPress={props.onPress}

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
      
      </TouchableOpacity>
  )
}

export default Button;
