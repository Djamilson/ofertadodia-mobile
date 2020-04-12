/* Core */
import React from "react";

/* Presentational */
import { View, Image, Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import styles from "./styles";
import assets from "./assets";

const Product = ({
  product: {
    imagem,
    categoria,
    descricao,
    valorUnitario,
    precoProdutoOferta,    
    marca,
    siglaUnidade,
    desconto
  }
}) => (
  <View style={[styles.container ]}>
    <Icon
      name="ios-checkmark-circle-outline"
      size={24}
      style={styles.checkIcon}
    />
    <View style={styles.imageContainer}>
      {imagem ? (
        <Image source={{ uri: imagem }} style={styles.image} />
      ) : (
        <Image source={assets.produto} />
      )}
    </View>
    <View style={styles.infoContainer}>
      <Text style={styles.title}>{categoria}</Text>

      <Text style={styles.description}>
        {descricao} {siglaUnidade}{" "}
      </Text>
      <Text style={styles.description}>{marca}</Text>
      <View style={styles.descontoView}>
        <Text style={styles.desconto}>Desconto de </Text>
        <Text style={styles.desconto}>{desconto}</Text>
      </View>
      <View style={styles.dePriceView}>
        <Text style={styles.dePriceTitle}>De: </Text>
        <Text style={styles.dePrice}>R$ {valorUnitario.toLocaleString("pt-BR", {
          // Ajustando casas decimais
          minimumFractionDigits: 2,  
          maximumFractionDigits: 2
        })}</Text>
      </View>

      <View style={styles.espacamentoVertical}>
        <View style={styles.porPriceView}>
          <Text style={styles.porPriceTitle}>Por: </Text>
          <Text style={styles.porPrice}>R$ {precoProdutoOferta.toLocaleString("pt-BR", {
            // Ajustando casas decimais
            minimumFractionDigits: 2,  
            maximumFractionDigits: 2
          })}</Text>
        </View>
      </View>
    </View>
  </View>
);

export default Product;
