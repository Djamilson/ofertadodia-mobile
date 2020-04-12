import React from 'react'
import { Platform, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import styles from './styles'

const Icone =  (props) => {
  return (

  <TouchableOpacity 
  onPress={props.onPress}
  style={[
    styles.container,
    props.style, styles.checkIcon,
    props.type ? styles[`button-${props.type}`] : {},
  ]}>
    <Icon size={props.size}  color={props.color} name={Platform.OS === "ios" ? `ios-${props.name}` : `md-${props.name}`} />  
</TouchableOpacity>
 )};

 export default Icone;