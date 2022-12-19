import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from 'utils/configData';

axios.defaults.baseURL = BASE_URL;

const setToken = token => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

const removeToken = () => {
  axios.defaults.headers.common['Authorization'] = '';
};

export const signUp = createAsyncThunk('auth/signup', async user => {
  const response = await axios.post('/users/signup', user);
  console.log(response);
  setToken(response.data.token);
  return response.data;
});

export const logIn = createAsyncThunk('auth/login', async user => {
  const response = await axios.post('/users/login', user);
  setToken(response.data.token);
  console.log(response);
  return response.data;
});
