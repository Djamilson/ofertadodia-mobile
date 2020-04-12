import axios from 'axios'

const api = axios.create({
  //  baseURL: 'https://rocketseat-node.herokuapp.com/api'
 // baseURL: 'http://192.168.10.102:8080/lancamentos'
 baseURL: 'http://192.168.10.104:8080' 
 
});

export default api;