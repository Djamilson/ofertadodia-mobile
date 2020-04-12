import React, { Component } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  ScrollView
} from "react-native";

import { SafeAreaView } from 'react-navigation';
import api from "../../services/api";
import Header from "../Header";
import styles from "./styles";
import Button from "../components/Button";
import Tabs from "../Tabs";
import Loading from "../components/Loading";
import moment from "moment";
import ChangeText from "../components/SearchBar/ChangeText";
import AwesomeAlert from "react-native-awesome-alerts";

import ButtonReflesh from "../components/ButtonReflesh";
import config from "../../utils/Config";
import msg from "../../utils/Msg";

class Promocao extends Component {
  state = {
    loading: false,
    empresaInfo: {},
    content: [],
    page: 0,
    textBusca: "",
    msg: "",
    note: "",
    showAlert: false,
    empresaTemp: {},
    statusBusca: true,
    botaoBusca: false
  };

  static navigationOptions = {
    header: null
  };

  writeText = textBusca => {
    this.setState({
      textBusca: textBusca,
      content: []
    });
    this.loadEmpresas();
  };

  mudaStatusBusca = () => this.setState({ statusBusca: false });
  showAlert = () => {
    this.setState({ showAlert: true });
  };
  hideAlert = () => {
    this.setState({ showAlert: false });
  };

  async componentDidMount() {
    this.loadEmpresas();
  }

  loadEmpresas = async (page = 0) => {
    try {
      if (this.state.loading) return;

      this.setState({ loading: true });

      const response = await api.get(
        `/promocoes/resumo?descricao=${
          this.state.textBusca
        }&page=${page}&size=${config.numero_item_exibir}`
      );

      if (response.data.totalElements < 1) {
        this.setState({
          textBusca: "",
          content: [],
          page: 0,
          empresaInfo: {}
        });
      }

      response.data.content.map(item => {
        item.dataInicio = moment(item.dataInicio).format("DD/MM/YYYY");
        item.dataFim = moment(item.dataFim).format("DD/MM/YYYY");        
      });

      const { content, ...empresaInfo } = response.data;
      this.setState({
        content: [...this.state.content, ...content],
        empresaInfo,
        page,
        loading: false
      });
    } catch (err) {
      this.setState({ loading: false });
      console.log(alert(msg.erro_conexao, err));
    }
  };

  loadMore = () => {
    const { page, empresaInfo } = this.state;

    if (page === empresaInfo.totalPages) return;

    const pageNumber = page + 1;

    this.loadEmpresas(pageNumber);
  };

  handleChangeEmpresaTemp = item => {
    this.setState({ empresaTemp: item });
  };

  renderBrinde = ({ item }) => {
    return (
      <View style={styles.infoContainer}>
        <Text style={styles.textData}>
          {item.quantidade} {item.subCategoria}
          {"(s)"} {item.categoria} {item.descricao}
        </Text>
      </View>
    );
  };

  renderItem = ({ item }) => {
    const paginaNavegacao = "Promocao";
    return (
      <View style={styles.productContainer}>
        <View style={styles.profileContainer}>
          <View style={styles.viewWidth}>
            {item.logo ? (
              <Image style={styles.avatar} source={{ uri: item.logo }} />
            ) : (
              <Image style={styles.avatar} source={assets.produto} />
            )}
            <View style={styles.avatarr}>
              <Button
                title="Mais"
                onPress={() => {
                  this.props.navigation.navigate("Detalhes", {
                    promocao: item,
                    paginaNavegacao: { paginaNavegacao }
                  });
                }}
              >
                Mais
              </Button>

              <View style={styles.espacao_entre}>
                <Button
                  onPress={() => {
                    this.handleChangeEmpresaTemp(item);
                    this.showAlert();
                  }}
                  type="outline"
                >
                  Dados
                </Button>
              </View>

              <Button
                title="Map"
                onPress={() => {
                  this.props.navigation.navigate("Map", {
                    empresa: item,
                    paginaNavegacao: { paginaNavegacao }
                  });
                }}
              >
                Map
              </Button>
            </View>
          </View>
          <View style={styles.profileInfo}>
            <View style={styles.profileContainer}>
              <View style={styles.profileInfo}>
                <View>
                  <Text style={styles.productTitle}>{item.nome}</Text>
                  <Text style={styles.empresa}>{item.empresa}</Text>
                </View>
                <View>
                  <Text style={styles.textData}>Válidade de:</Text>
                  <Text style={styles.textData}>
                    {item.dataInicio} à{" "}
                    {item.dataFim}
                  </Text>
                  <Text style={styles.textData}>{item.descricao}</Text>
                </View>
                <View style={styles.profileInfo}>
                  <Text style={styles.empresa}>Prêmios</Text>
                  <FlatList
                    data={item.listaBrindePromocao}
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
  };

  //chamando quando
  handleBusca = statusBusca => {
    return statusBusca;
  };

  //chamando quando clicar no cancelar
  handleBuscaRetorno = retorno => {
    if (!this.state.statusBusca) {
      this.searchClear();
    }
    this.setState({ botaoBusca: false, statusBusca: retorno });
  };

  searchClear = async () => {
    await this.setState({
      empresaInfo: {},
      content: [],
      page: 0,
      textBusca: "",
      empresaTemp: {}
    });

    this.loadEmpresas();
  };

  funcaoBusca = () => {
    if (!this.state.statusBusca)
      return (
        <View>
          <ChangeText
            writeText={this.writeText}
            label="Cancelar"
            statusBusca={this.handleBusca(this.state.statusBusca)}
            handleBuscaRetorno={this.handleBuscaRetorno}
            searchClear={this.searchClear}
            value={this.state.textBusca}            
            placeholder = "Busca por empresa!"
          />
        </View>
      );
    return null;
  };

  //quando clicar no icon busca
  desabilitabotao = () => {
    this.setState({ botaoBusca: true });
  };

  render() {
    const constantePromocoes = "Buscando promoções";
    const nomeTitle = "Promoções";
    const { showAlert, empresaTemp, botaoBusca } = this.state;
    const paginaNavegacao = "Promocao";

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

        {this.funcaoBusca()}
        <ButtonReflesh
          onPress={() => {
            this.loadEmpresas();
          }}
          msgParaUsuario="Não foi encontrada nenhuma promoção!"
          loading={!this.state.loading}
          content={this.state.content.length}
        />

<SafeAreaView style={{ flex: 1, alignSelf: 'stretch', height: 50 }} >
        
          <View style={StyleSheet.container}>
            {this.state.loading ? (
              <Loading style={styles.distanciaTop} title={constantePromocoes} />
            ) : (
              <FlatList
                contentContainerStyle={styles.list}
                data={this.state.content}
                keyExtractor={item => item.idPromocao.toString()}
                renderItem={this.renderItem}
                onEndReached={this.loadMore}
                onEndReachedThreshold={0.1} /* 90% */
                //   ListFooterComponent={this.renderFooter}
              />
            )}
          </View>
    </SafeAreaView>
        <Tabs
          navigation={this.props.navigation}
          handleBuscaRetorno={this.handleBuscaRetorno}
          disabled={botaoBusca}
          desabilitabotao={this.desabilitabotao}
          paginaNavegacao={paginaNavegacao}
        />

        <AwesomeAlert
          show={showAlert}
          showProgress={false}
          title={empresaTemp.empresa}
          message={`
                    Logradouro: ${empresaTemp.logradouro}
                    Bairro: ${empresaTemp.bairro},
                    Complemento: ${empresaTemp.complemento},
                    Cep: ${empresaTemp.cep},
                    Cidade: ${empresaTemp.cidade}-${empresaTemp.uf},
                    Fone: ${empresaTemp.fone} 
                `}
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showCancelButton={false}
          showConfirmButton={true}
          confirmText="Ok"
          confirmButtonColor="#DD6B55"
          onCancelPressed={() => {
            this.hideAlert();
          }}
          onConfirmPressed={() => {
            this.hideAlert();
          }}
        />
      </View>
    );
  }
}

export default Promocao;
