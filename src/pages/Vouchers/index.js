import React, { Component } from "react";
import { View, FlatList, StyleSheet, ScrollView } from "react-native";

import api from "../../services/api";
import Header from "../Header";
import styles from "./styles";
import Button from "../components/Button";
import Tabs from "../Tabs";
import Loading from "../components/Loading";

import ChangeText from "../components/SearchBar/ChangeText";
import ButtonReflesh from '../components/ButtonReflesh'
import AwesomeAlert from "react-native-awesome-alerts";
import moment from "moment";

import { SafeAreaView } from 'react-navigation';
import config from "../../utils/Config";
import msg from "../../utils/Msg";
import Voucher from "./Voucher";

class Vouchers extends Component {
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

  getTextInputValue = () => {
    this.setState({ Text_Holder_2: this.state.Text_Holder_1 });
  };

  writeText = textBusca => {
    this.setState({
      textBusca: textBusca,
      content: []
    });
    this.loadVouchers();
  };

  mudaStatusBusca = () => this.setState({ statusBusca: false });
  showAlert = () => {
    this.setState({ showAlert: true });
  };
  hideAlert = () => {
    this.setState({ showAlert: false });
  };

  async componentDidMount() {
    this.loadVouchers();
  }

  loadVouchers = async (page = 0) => {
    try {
      if (this.state.loading) return;

      this.setState({ loading: true });

      const response = await api.get(
        `/vouchers/resumo?descricao=${this.state.textBusca}&page=${page}&size=${
          config.numero_item_exibir
        }`
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

    this.loadVouchers(pageNumber);
  };

  handleChangeEmpresaTemp = item => {
    this.setState({ empresaTemp: item });
  };

  timeNow() {
    return moment().format("hh:mm:ss");
  }

  renderItem = ({ item }) => {
  
    return (
      <View style={styles.main}>
        <View style={styles.container}>
          <View style={styles.avatar}>
            <Button
              title="Confira"
              style={styles.firstButton_}
              onPress={() => {
                this.props.navigation.navigate("QRCode", {
                  empresa: item
                });
              }}
            >
              Gerar QR Code
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
              style={styles.firstButton_}
              onPress={() => {
                this.props.navigation.navigate("Map", {
                  empresa: item
                });
              }}
            >
              Map
            </Button>
          </View>

          <Voucher item_voucher={item} />
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

    this.loadVouchers();
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
    const constanteVouchers = "Buscando vouchers";
    const nomeTitle = "Vouchers";
    const { showAlert, empresaTemp, botaoBusca } = this.state;
    const paginaNavegacao = "Vouchers";

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
          this.loadVouchers();
        }}
        msgParaUsuario="Não foi encontrado nenhum voucher!"
        loading={!this.state.loading}
        content={this.state.content.length}
      />
        
        <SafeAreaView style={{ flex: 1, alignSelf: 'stretch', height: 50 }} >
        
          <View style={StyleSheet.container}>
            {this.state.loading ? (
              <Loading style={styles.distanciaTop} title={constanteVouchers} />
            ) : (
              <FlatList
                contentContainerStyle={styles.list}
                data={this.state.content}
                keyExtractor={item => item.idVoucher.toString()}
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

export default Vouchers;
