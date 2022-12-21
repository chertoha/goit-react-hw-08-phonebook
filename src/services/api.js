import axios from 'axios';
import { BASE_URL } from 'utils/configData';

axios.defaults.baseURL = BASE_URL;

export const api = axios.create({
  baseURL: BASE_URL,
});

export const setApiToken = token => {
  api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export const removeApiToken = () => {
  api.defaults.headers.common['Authorization'] = '';
};
