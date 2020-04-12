/* Core */
import React from 'react';

/* Presentational */
import { View, Text, ToolbarAndroid, Platform, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons'

const Tabs = ({ navigation, handleBuscaRetorno, disabled, desabilitabotao, paginaNavegacao}) =>{
  // console.log('Passs: ',navigation)

  const ICON_SIZE = 21;
  //const FONT_SIZE = 18;

  const getBusca = (icon, title, statusBusca) => (
    <TouchableOpacity onPress={ () => {
      handleBuscaRetorno(false);   
      desabilitabotao();   
    }} disabled={statusBusca}>
      <View style={styles.iconStyle}>
        <Icon name={icon} size={ICON_SIZE} solid style={[styles.icon, styles.active]} />
        <Text style={styles.textStyle}>{title}</Text>
      </View>
    </TouchableOpacity>
  );

  const getOfetas = (icon, title, destino, paginaNavegacao) => (
    <TouchableOpacity onPress={() => navigation.navigate(destino)} >
    <View style={styles.iconStyle}>
      <View style={[paginaNavegacao === 'Main' ? styles.selecionado : null ]}> 
        <Ionicons name={icon} size={ICON_SIZE} style={[styles.active]}/>
      </View> 
      <Text style={[styles.textStyle, paginaNavegacao ==='Main'? styles.active: null ]}>{title}</Text>
    </View> 
    </TouchableOpacity>
  );

const getVouchers = (icon, title, destino, paginaNavegacao) => (
  <TouchableOpacity onPress={() => navigation.navigate(destino)} >
    <View style={styles.iconStyle}>

      <View style={[paginaNavegacao === 'Vouchers' ? styles.selecionado : null ]}> 
      <FontAwesome5 name={icon} size={ICON_SIZE} style={[styles.active]}/>
      </View> 
      <Text style={[styles.textStyle, paginaNavegacao ==='Vouchers'? styles.active: null ]}>{title}</Text>

     </View>
  </TouchableOpacity>
  );

const getPromocao = (icon, title, destino, paginaNavegacao) => (
  <TouchableOpacity onPress={() => navigation.navigate(destino)} >
  <View style={styles.iconStyle}>

    <View style={[paginaNavegacao === 'Promocao' ? styles.selecionado : null ]}> 
      <Ionicons name={icon} size={ICON_SIZE} style={[styles.active]}/>
    </View> 
    <Text style={[styles.textStyle, paginaNavegacao ==='Promocao'? styles.active: null ]}>{title}</Text>

  </View> 
  </TouchableOpacity>
);


const getSobre = (icon, title, destino, paginaNavegacao) => (
  <TouchableOpacity onPress={() => navigation.navigate(destino)} >
  <View style={styles.iconStyle}>
  
    <View style={[paginaNavegacao === 'Sobre' ? styles.selecionado : null ]}> 
      <Icon name={icon} size={ICON_SIZE} style={[styles.active]}/>
    </View> 
  <Text style={[styles.textStyle, paginaNavegacao ==='Sobre'? styles.active: null ]}>{title}</Text>

   </View>
  </TouchableOpacity>
);


  return (
  <View style={styles.container}>  
    {getBusca('search','Busca', disabled)}
    {getVouchers('award','Vouchers','Vouchers', paginaNavegacao)}    
    {getOfetas('ios-megaphone','Ofertas', 'Main', paginaNavegacao)}
    {getPromocao('md-pricetags','Promoções','Promocao', paginaNavegacao)}    
    {getSobre('cog','Sobre', 'Sobre', paginaNavegacao)}
  </View>
);

}

export default Tabs;
