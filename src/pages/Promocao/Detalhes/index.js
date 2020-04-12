import React, { Component } from "react";
import { View, Text, FlatList, Image } from "react-native";
import styles from "./styles";
import Header from "../../Header";
import moment from "moment";

class Detalhes extends Component {

  static navigationOptions = {
    header: null
  }

  renderBrinde = ({ item }) => {
    console.log("Dentro do render Brinder: ", item);
    return (
      <View style={styles.infoContainer}>
        <Text style={styles.textData}>
          {item.quantidade} {item.subCategoria}
          {"(s)"} {item.categoria} {item.descricao}
        </Text>
      </View>
    );
  };

  render() {
    const { state } = this.props.navigation;
    const nomeTitle = "Detalhes";
   
    const {
      idPromocao,
      descricao,
      nome,
      dataInicio,
      dataFim,
      localSorteio,
      dataSorteio,
      imagemPromocao,
      empresa,
      logo,
      logradouro,
      bairro,
      complemento,
      cep,
      cidade,
      uf,
      fone,
      listaBrindePromocao
    } = this.props.navigation.state.params.promocao;

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
            <View>
              <View style={styles.inner}>                
                {imagemPromocao ? (
                  <Image
                    style={styles.avatar}
                    source={{ uri: imagemPromocao }}
                  />
                ) : (
                  <Image style={styles.avatar} source={assets.produto} />
                )}
              </View>

              <View style={styles.profileInfo}>
                <View>
                  <Text style={styles.productTitle}>{nome}</Text>
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
                <View>
                  <Text style={styles.productTitle}>Sorteio</Text>
                  <Text style={styles.empresa}>
                    Data: {moment(dataSorteio).format("DD/MM/YYYY")}
                  </Text>
                  <Text style={styles.empresa}>
                    Hora: {moment(dataSorteio).format("HH:mm")}
                  </Text>
                  <Text style={styles.empresa}>
                    Local do Sorteio: {localSorteio}
                  </Text>
                </View>

                <View>
                  <Text style={styles.productTitle}>Prêmios</Text>
                  <FlatList
                    data={listaBrindePromocao}
                    keyExtractor={item => item.idBrindePromocao.toString()}
                    renderItem={this.renderBrinde}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default Detalhes;
