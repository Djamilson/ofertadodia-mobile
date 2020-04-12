import axios from 'axios'

const api_send_email = axios.create({
 baseURL: 'http://192.168.10.102:3410'
});

export default api_send_email;