import React from "react";
import { View } from "react-native";

const Grupobutton = ({ item_voucher, qrCode, dados, map, props }) => (
  <View style={styles.avatar}>
    <Button
      title="Confira"
      style={styles.firstButton_}
      onPress={() => {
        props.navigation.navigate("QRCode", {
          empresa: item_voucher
        });
      }}
    >
      Gerar QR Code
    </Button>

    <View style={styles.espacao_entre}>
      <Button onPress={onPress} type="outline">
        Dados
      </Button>
    </View>

    <Button
      title="Map"
      style={styles.firstButton_}
      onPress={() => {
        props.navigation.navigate("Map", {
          empresa: item_voucher
        });
      }}
    >
      Map
    </Button>
  </View>
);

export default Grupobutton;
