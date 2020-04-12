import React, { Component } from "react";
import { Text, View } from "react-native";

import QRCoder from "react-native-qrcode";

import Header from "../../Header";

import styles from "./styles";

import moment from "moment";

class QRCode extends Component {
  static navigationOptions = {
    header: null
  };

  state = {
    Text_Holder_2: ""
  };

  async componentDidMount() {
    this.getTextInputValue();
  }

  getTextInputValue = async () => {
    const { voucher } = await this.props.navigation.state.params.empresa;

    this.setState({ Text_Holder_2: voucher });
  };

  render() {
    const nomeTitle = "QR Code";
    const navegacaoHome = "Vouchers";
    const { Text_Holder_2 } = this.state;
    const {
      voucher,
      descricao,
      dataInicio,
      dataFim,
      empresa,
      qtDesconto,
      real,
      porcentagem
    } = this.props.navigation.state.params.empresa;

    return (
      <View style={{ flex: 1, backgroundColor: "#F8F8FA" }}>
        <Header
          title={nomeTitle}
          style={styles.firstButton}
          navigation={() => this.props.navigation.goBack()}
          contato={() => {
            this.props.navigation.navigate("Contato");
          }}
        />

        <View style={styles.main}>
          <View style={styles.card}>
            <View style={styles.topBorder} />
            <View style={styles.inner}>
              <QRCoder
                value={Text_Holder_2}
                size={250}
                bgColor="#000"
                fgColor="#fff"
              />
            </View>
            <View style={styles.inner_}>
              <View>
                <Text style={styles.productTitle}>{voucher}</Text>
                <Text style={styles.empresa}>{empresa}</Text>
              </View>
              <View>
                <Text style={styles.textData}>Válidade de:</Text>
                <Text style={styles.textData}>
                  {dataInicio} à{" "}
                  {dataFim}
                </Text>
                <Text style={styles.textData}>{descricao}</Text>
              </View>

              <Text style={styles.productTitle_}>
                {" "}
                Desconto de:
                {real ? " R$ " : null}
                {porcentagem
                  ? qtDesconto + "%"
                  : qtDesconto.toLocaleString("pt-BR", {
                      // Ajustando casas decimais
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2
                    })}
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default QRCode;
