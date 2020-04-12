import React, { Component } from "react";
import styles from "./styles";
import Header from "../Header";

import { View, FlatList, ScrollView, Dimensions, PixelRatio } from "react-native";
import Product from "../ProdutoEmpresa/ProductList/Product";
import api from "../../services/api";
import Loading from "../components/Loading";
import ButtonReflesh from "../components/ButtonReflesh";
import msg from "../../utils/Msg";
import config from "../../utils/Config";
import { SafeAreaView } from 'react-navigation';
import Tabs from '../Tabs'


const { width, height } = Dimensions.get('window');

import ChangeText from "../components/SearchBar/ChangeText";

class FiltroTodosProdutos extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
  }

  state = {
    empresa: [],
    editing: false,
    statusBusca: true,
    botaoBusca: false,
    textBusca: "",
    inputValue: "",

    loading: false,
    empresaInfo: {},
    content: [],
    page: 0,
    descricao: "",
    categoria: "",
    idSecao: "",
    botaoBusca: false,
  };

  async componentDidMount() {
    this.loadListaProdutoOferta();
  }

  loadListaProdutoOferta = async (page = 0) => {
    const { textBusca, idSecao, categoria, descricao } = this.state;

    try {
      this.setState({ loading: true });
      const response = await api.get(`/lancamentos/produtoOferta/filtertodosprodutos`, {
        params: {
          descricao: descricao,
          categoria: textBusca,
          idSecao: idSecao.toString(),
          page: page.toString(),
          size: config.numero_item_exibir.toString()
        }
      });

      if (response.data.totalElements < 1) {
        this.setState({
          textBusca: "",
          content: [],
          page: 0,
          produtoInfo: {}
        });
      }

      const { content, ...produtoInfo } = response.data;
      this.setState({
        content: [...this.state.content, ...content],
        produtoInfo,
        page,
        loading: false
      });
    } catch (error) {
      this.setState({ loading: false });
      alert(msg.erro_conexao, err);
    }
  };

  loadMore = () => {
    const { page, produtoInfo } = this.state;
console.log('Page: ', page);console.log('quantidade: ', this.state.content.length);
    if (page === produtoInfo.totalPages) return;

    const pageNumber = page + 1;

    this.loadListaProdutoOferta(pageNumber);
  };

  renderItem = ({ item }) => {
    return <Product product={item} />;
  };

  writeText = async textBusca => {
    await this.setState({
      textBusca: textBusca,
      content: []
    });
    this.loadListaProdutoOferta();
  };

  componentProduto = () => {
    const columns = 2;
    const constanteCarregaProduto = "Carrendo os produtos ";

    return this.state.loading ? (

      <Loading style={styles.distanciaTop} title={constanteCarregaProduto} />
    ) : (
        <View style={{ flex: 1, backgroundColor: "#F8F8FA" }}>
            <FlatList
              data={this.state.content}
              renderItem={this.renderItem}
              numColumns={columns}
              keyExtractor={item => item.idProdutoOferta.toString()}
              onEndReached={this.loadMore}
              onEndReachedThreshold={0.1} /* 90% */
            />     
         </View>
      );
  };

  mudaStatusBusca = () => this.setState({ statusBusca: false });

  //chamando quando
  handleBusca = statusBusca => { return statusBusca; };

  searchClear = async () => {
    await this.setState({
      produtoInfo: {},
      content: [],
      page: 0,
      textBusca: ""
    });

    this.loadListaProdutoOferta();
  };

  //chamando quando clicar no cancelar
  handleBuscaRetorno = retorno => {
    if (!this.state.statusBusca) {
      this.searchClear();
    }
    this.setState({ botaoBusca: false, statusBusca: retorno });
  };

  //quando clicar no icon busca
  desabilitabotao = () => {
    this.setState({ botaoBusca: true });
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
            placeholder="Busca produto ..."
          />
        </View>
      );
    return null;
  };

  render() {

    const nomeTitle = "Lista de Produtos";
    const { botaoBusca, loading, content } = this.state;
    const paginaNavegacao = "Main";

    return (
      <View style={styles.container}>
        <Header
          title={nomeTitle}
          style={styles.firstButton}
          navigation={() => this.props.navigation.goBack()}
          contato={() => {
            this.props.navigation.navigate("Contato");
          }}
        />
        {this.funcaoBusca()}
      
       
        <SafeAreaView style={{ flex: 1, alignSelf: 'stretch', height: 50 }} >
        
          <ButtonReflesh
            onPress={() => {
              this.loadListaProdutoOferta();
            }}
            msgParaUsuario="Não foi encontrado nenhum produto!"
            loading={!loading}
            content={content.length}
          />
         
            {this.componentProduto()}
       
        </SafeAreaView>
        <Tabs
            navigation={this.props.navigation}
            handleBuscaRetorno={this.handleBuscaRetorno}
            disabled={botaoBusca}
            desabilitabotao={this.desabilitabotao}
            paginaNavegacao={paginaNavegacao}
          />
      </View>
    );
  }
}

export default FiltroTodosProdutos;
