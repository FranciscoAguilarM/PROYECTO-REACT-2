import axios from 'axios';

//Importa lo de la base de datos
const ClienteAxios = axios.create({
    baseURL : 'http://localhost:8888'
});

export default ClienteAxios;