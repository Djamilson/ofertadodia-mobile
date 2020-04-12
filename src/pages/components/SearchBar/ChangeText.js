import React, { Component } from "react";
import { TextInput, Text, View, TouchableOpacity } from "react-native";

import { colors } from "../../../styles";
import styles from "./styles";

import Icon from "react-native-vector-icons/EvilIcons";

const BLUE = colors.bluer;
const PRIMARY = colors.primary;
const LIGHT = colors.light;

class ChangeText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textBusca: "",
      isFocused: false,
      statusBusca: props.statusBusca
    };
  }

  setSearchText(e) {
    let textBusca = e.nativeEvent.text;
    this.setState({ textBusca });
    this.props.writeText(textBusca);
  }

  submitAndClear = () => {
    this.setState({
      textBusca: "",
      isFocused: true
    });
    this.props.writeText("");
  };

  handleFocus = event => {
    this.setState({ isFocused: true });
    if (this.props.onFocus) {
      this.props.onFocus(event);
    }
  };

  handleBlur = event => {
    this.setState({ isFocused: false });
    if (this.props.onBlur) {
      this.props.onBlur(event);
    }
  };

  render() {
    const { isFocused } = this.state;
    const {
      label,
      onFocus,
      onBlur,
      cancelar,
      handleBuscaRetorno,
      searchClear,
      placeholder,
      ...props
    } = this.props;
    const final = !isFocused ? { width: "90%" } : { flex: 1 };

    const labelStyle = {
      fontSize: !isFocused ? 14 : 14,
      color: !isFocused ? "#000" : "#aaa"
    };

    return (
      <View style={styles.searchBarContainer}>
        <View style={styles.subContainerSearch}>
          <Icon name="search" size={19} style={styles.checkIcon_left} />
          <TextInput
            style={[styles.searchBarText, final]}
            onChange={this.setSearchText.bind(this)}
            placeholder= {placeholder}
            placeholderTextColor={LIGHT}
            {...props}
            selectionColor={BLUE}
            underlineColorAndroid={isFocused ? PRIMARY : LIGHT}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
          />

          {!isFocused ? null : (
            <Icon
              name="close"
              size={16}
              style={styles.checkIcon_right}
              onPress={() => {
                searchClear();
              }}
            />
          )}
        </View>

        {!isFocused ? null : (
          <TouchableOpacity
            style={styles.textViewCancelar}
            onPress={() => {
              handleBuscaRetorno(true);
            }}
          >
            <Text style={[styles.labelStyle, labelStyle]}>{label}</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  }
}

export default ChangeText;
