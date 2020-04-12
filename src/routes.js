import { createStackNavigator, createAppContainer } from "react-navigation";

import Main from "./pages/HomeScreen";
import Vouchers from "./pages/Vouchers";
import Sobre from "./pages/Sobre";
import ProdutoEmpresa from "./pages/ProdutoEmpresa";
import Promocao from "./pages/Promocao";
import Map from "./pages/HomeScreen/Map";
import QRCode from "./pages/Vouchers/QRCode";
import Detalhes from "./pages/Promocao/Detalhes";
import Contato from "./pages/Contato";
import FiltroTodosProdutos from "./pages/Filtro/";
const AppNavigator = createStackNavigator(
  {
    Main: Main,
    Vouchers: Vouchers,
    Sobre: Sobre,
    ProdutoEmpresa: ProdutoEmpresa,
    Promocao: Promocao,
    Map: Map,
    QRCode: QRCode,
    Detalhes: Detalhes,
    Contato: Contato,
    FiltroTodosProdutos: FiltroTodosProdutos
  },
  {
    initialRouteName: "Main"
  }
);

export default createAppContainer(AppNavigator);
