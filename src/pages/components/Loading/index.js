import React from 'react'

import {
  ActivityIndicator,
  Text,
  View,
} from 'react-native'

import styles from './styles';

const Loading = (props) => {
  return (
    <View
      style={[styles.container, styles.horizontal,
      props.style,
      ]}>

      <ActivityIndicator size="small" color="#FF9982" />
      <View>
        <Text style={[
          styles.text, props.type ? styles[`text-${props.type}`] : {},
        ]}>  {props.title} ...   </Text>
      </View>
    </View>
  )
}

export default Loading;



