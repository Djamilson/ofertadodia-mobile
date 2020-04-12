import React, { Component } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  ActivityIndicator,
  Dimensions, PixelRatio
} from "react-native";

import api from "../../services/api";
import Header from "../Header";
import styles from "./styles";
import Button from "../components/Button";
import Tabs from "../Tabs";
import Loading from "../components/Loading";
import moment from "moment";
import ChangeText from "../components/SearchBar/ChangeText";
import ButtonReflesh from "../components/ButtonReflesh";
import assets from "../assets";
import AwesomeAlert from "react-native-awesome-alerts";
import msg from "../../utils/Msg";
import config from "../../utils/Config";

import { SafeAreaView } from 'react-navigation';

//const { width, height } = Dimensions.get('window');
//const {width, height } = Dimensions.get('screen');

export default class Main extends Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = {
    header: null
  };

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
    botaoBusca: false,
  };

  writeText = textBusca => {
    this.setState({
      textBusca: textBusca,
      content: []
    });
    this.loadEmpresas();
  };

  mudaStatusBusca = () => this.setState({ statusBusca: false });
  showAlert = () => this.setState({ showAlert: true });
  hideAlert = () => this.setState({ showAlert: false });

  async componentDidMount() {
    //  console.log(PixelRatio.getPixelSizeForLayoutSize(width));    
    //console.log(PixelRatio.getPixelSizeForLayoutSize(Dimensions.get('window').height));

    //console.log('width: ',width);
    //console.log('height: ', height);

    this.loadEmpresas();
  }

  /* onLayout = event => {
     if (this.state.dimensions) return // layout was already called
     let {width, height} = event.nativeEvent.layout
     this.setState({dimensions: {width, height}})
   }*/

  loadEmpresas = async (page = 0) => {
    try {
      if (this.state.loading) return;

      this.setState({ loading: true });
      const response = await api.get(
        `/lancamentos/resumo?descricao=${
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
      alert(msg.erro_conexao, err);
    }
  };

  loadMore = () => {
    const { page, empresaInfo } = this.state;

    if (page === empresaInfo.totalPages) return;
    const pageNumber = page + 1;
    console.log('Pagina: ', page)
    this.loadEmpresas(pageNumber);
  };

  handleChangeEmpresaTemp = item => {
    this.setState({ empresaTemp: item });
  };

  renderItem = ({ item }) => {
    const paginaNavegacao = "Main";

    return (
      <View style={styles.productContainer}>
        <View style={styles.profileContainer}>
          {item.logo ? (
            <Image style={styles.avatar} source={{ uri: item.logo }} />
          ) : (
              <Image style={styles.avatar} source={assets.logo} />
            )}

          <View style={styles.profileInfo}>
            <View>
              <Text style={styles.productTitle}>{item.nome}</Text>
              <Text>{item.empresa}</Text>
            </View>
            <View>
              <Text style={styles.textData}>Válidade de:</Text>
              <Text style={styles.textData}>
                {item.dataInicio} à {item.dataFim}
              </Text>
              <Text style={styles.textData}>{item.descricao}</Text>
            </View>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Produtos"
            style={styles.firstButton}
            onPress={() => {
              this.props.navigation.navigate("ProdutoEmpresa", {
                empresa: item,
                paginaNavegacao: { paginaNavegacao }
              });
            }}
          >
            Produtos
          </Button>

          <Button
            onPress={() => {
              this.handleChangeEmpresaTemp(item);
              this.showAlert();
            }}
            type="outline"
          >
            Dados
          </Button>

          <Button
            title="Map"
            style={styles.firstButton_}
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
    const { statusBusca, textBusca } = this.state;

    if (!statusBusca)
      return (
        <View>
          <ChangeText
            writeText={this.writeText}
            label="Cancelar"
            statusBusca={this.handleBusca(statusBusca)}
            handleBuscaRetorno={this.handleBuscaRetorno}
            searchClear={this.searchClear}
            value={textBusca}
            placeholder="Busca por empresa ..."
          />
        </View>
      );
    return null;
  };

  //quando clicar no icon busca
  desabilitabotao = () => {
    this.setState({ botaoBusca: true });
  };
  renderFooter = () => {
    if (!this.state.loading) return null;

    return (
      <View
        style={{
          paddingVertical: 20,
          borderTopWidth: 1,
          borderColor: "#CED0CE"
        }}
      >
        <ActivityIndicator animating size="large" />
      </View>
    );
  };
  render() {
    const constanteOfertas = "Buscando as ofertas ";
    const nomeTitle = "Oferta do dia";
    const { showAlert, empresaTemp, botaoBusca } = this.state;
    const paginaNavegacao = "Main";
    /*
        if (this.state.dimensions) {
          const { dimensions } = this.state
          const { width, height } = dimensions
         
        }*/

    return (
      <View style={{ flex: 1, backgroundColor: "#F8F8FA" }}>
        <Header
          title={nomeTitle}
          navegacaoHome={paginaNavegacao}
          filtroTodosProdutos={() => {
            this.props.navigation.navigate("FiltroTodosProdutos");
          }}
          contato={() => {
            this.props.navigation.navigate("Contato");
          }}
        />

        {this.funcaoBusca()}

        <ButtonReflesh
          onPress={() => {
            this.loadEmpresas();
          }}
          msgParaUsuario="Não foi encontrada nenhuma oferta!"
          loading={!this.state.loading}
          content={this.state.content.length}
        />

        <SafeAreaView style={{ flex: 1, alignSelf: 'stretch', height: 100 }} >

          <View style={StyleSheet.container} >
            {this.state.loading ? (
              <Loading style={styles.distanciaTop} title={constanteOfertas} />
            ) : (
                <FlatList
                  contentContainerStyle={styles.list}
                  data={this.state.content}
                  keyExtractor={item => item.idOferta.toString()}
                  renderItem={this.renderItem}
                  onEndReachedThreshold={0}
                  ListFooterComponent={this.renderFooter}                 
                  onEndReached={() => {
                    console.log(" On End Reached");
                    this.loadMore();
                  }
                  }
                  extraData={this.state}
                  onEndReachedThreshold={0.1} /* 90% */

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
