import axios from 'axios';

const ip = '192.168.1.10'

const api = axios.create({
    baseURL: `http://${ip}:3333`
});

export default api; 
