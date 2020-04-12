import React, { Component } from "react";
import { Text, View} from "react-native";
import Header from "../Header";

import styles from "./styles";
import config from "../../utils/Config";

class Sobre extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    const nomeTitle = "Sobre";

    return (
      <View style={styles.containe}>
        <Header
          title={nomeTitle}
          style={styles.firstButton}
          navigation={() => this.props.navigation.goBack()}
          contato={() => {
            this.props.navigation.navigate("Contato");
          }}
        />

        <View style={styles.container}>
          <View style={styles.card}>
            <View style={styles.topBorder} />
            <View style={styles.inner}>
              <View style={styles.wrapTextNome}>
                <Text style={styles.textLabel}>Nome: </Text>
                <Text style={styles.textData}>{config.nome_app}</Text>
              </View>

              <View style={styles.wrapTextNome}>
                <Text style={styles.textLabel}>Versão: </Text>
                <Text style={styles.textData}>{config.versao_app}</Text>
              </View>

              <View style={styles.wrapTextNome}>
                <Text style={styles.textLabel}>Contato: </Text>
                <Text style={styles.textData}>{config.email}</Text>
              </View>

              <View style={styles.wrapTextNome}>
                <Text style={styles.textLabel}>Domínio: </Text>
                <Text style={styles.textData}>{config.dominio}</Text>
              </View>
              <View style={styles.wrapTextMensagem}>              
                <Text style={styles.textData}>{config.mensagem_sobre}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default Sobre;
