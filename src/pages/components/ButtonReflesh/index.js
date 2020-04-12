/* Core */
import React from "react";

/* Presentational */
import { Image, TouchableOpacity, View } from "react-native";

import styles from "./styles";
import assets from "../../assets";
import Msg from '../Msg/'

const ButtonReflesh = props => {
  if (props.content < 1 && props.loading){
  return (    
    <View>
      <TouchableOpacity onPress={props.onPress} style={styles.container}>
        <Image source={assets.reflesh} />
      </TouchableOpacity>

      <Msg style={styles.distanciaTop} title="outline">
        {props.msgParaUsuario}
      </Msg>
    </View>
  );}
  return null
};

export default ButtonReflesh;
