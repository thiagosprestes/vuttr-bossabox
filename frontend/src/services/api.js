import axios from 'axios';

// Define uma URL base para todas as requisições a API
const api = axios.create({
    baseURL: 'http://localhost:3333',
});

export default api;
