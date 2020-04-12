import React from "react";

/* Presentational */
import { View, Text } from "react-native";
import styles from "./styles";

import IconFont from "react-native-vector-icons/FontAwesome5";

const Voucher = ({
  item_voucher: {
    empresa,
    dataInicio,
    dataFim,
    descricao,
    real,
    porcentagem,
    qtDesconto
  }
}) => (
  <View style={styles.profileInfo}>
    <View>
      <Text style={styles.empresa}>{empresa}</Text>
    </View>
    <View>
      <Text style={styles.textData}>Válidade de:</Text>
      <Text style={styles.textData}>
        {dataInicio} à{" "}
        {dataFim}
      </Text>
      <Text style={styles.myText}>{descricao}</Text>

      <Text style={styles.porPriceTitle}>Desconto de: </Text>
      <View style={styles.containerDesconto}>
        <IconFont name={"arrow-right"} size={17} color={"#FFF"} />
        <Text style={styles.dePrice}>
          {real ? "R$ " : null}
          {porcentagem ? qtDesconto + "%" : qtDesconto + ",00"}
        </Text>
      </View>
    </View>
  </View>
);

export default Voucher;
