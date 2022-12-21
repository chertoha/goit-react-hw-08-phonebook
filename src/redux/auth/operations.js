import { createAsyncThunk } from '@reduxjs/toolkit';
import { api, setApiToken, removeApiToken } from 'services/api';

export const signUp = createAsyncThunk(
  'auth/signup',
  async (user, thunkAPI) => {
    try {
      const response = await api.post('/users/signup', user);
      // console.log(response);
      setApiToken(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk('auth/login', async (user, thunkAPI) => {
  try {
    const response = await api.post('/users/login', user);
    setApiToken(response.data.token);
    // console.log(response);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const logOut = createAsyncThunk(
  'auth/logout',
  async (user, thunkAPI) => {
    try {
      const response = await api.post('/users/logout');
      removeApiToken();
      // console.log(response);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const persistedToken = thunkAPI.getState().auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue(null);
    }

    setApiToken(persistedToken);

    try {
      const response = await api.get('/users/current');
      // console.log(response);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
