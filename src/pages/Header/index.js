/* Core */
import React, { Component } from "react";

/* Presentational */
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import IconFontAwesome5 from "react-native-vector-icons/FontAwesome5";

import styles from "./styles";

const Header = props => {
  let icon = null;
  icon = <Icon name="ios-arrow-back" size={24} style={styles.icon} />;

  return (
    <View style={styles.container}>
      {props.navegacaoHome ? (
        <TouchableOpacity onPress={props.filtroTodosProdutos}>
          <Text> Filtro </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={props.navigation}>
          <Text> {icon} </Text>
        </TouchableOpacity>
      )}

      <Text style={styles.title}>{props.title}</Text>

      {props.contato ? (
        <TouchableOpacity onPress={props.contato}>
          <IconFontAwesome5 name="envelope" size={21} style={styles.icon} />
        </TouchableOpacity>
      ) : (
        <Text />
      )}
    </View>
  );
};

export default Header;
