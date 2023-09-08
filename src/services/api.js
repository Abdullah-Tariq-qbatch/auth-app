import axios from 'axios';
import TokenStorage from './tokenStorage';

const api = axios.create({
  baseURL: 'https://dummyjson.com',
  headers: {
    "Content-Type": "application/json",
  },
})

api.interceptors.request.use(
  (config) => {
    const localAccessToken = TokenStorage.getLocalAccessToken();
    if (localAccessToken) config.headers["Authorization"] = 'Bearer ' + localAccessToken;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
)

export default api;
