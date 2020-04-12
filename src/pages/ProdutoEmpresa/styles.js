import { StyleSheet } from 'react-native'


import { metrics } from '../../styles';

export default styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#F8F8FA'         
        },   
        produto_container: {
          padding: metrics.padding,
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        },
        distanciaTop:{
          flex:1,
          flexDirection: 'column',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 80
      },  
})
