import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut, signUp } from './operations';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const initialState = {
  user: null,
  token: null,
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: builder => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
      .addCase(signUp.pending, (state, action) => state)
      .addCase(signUp.fulfilled, (state, action) => {
        // Add user to the state array
        //   state.entities.push(action.payload);
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(signUp.rejected, state => state)
      .addCase(logIn.pending, state => state)
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logIn.rejected, state => state)
      .addCase(logOut.pending, state => state)
      .addCase(logOut.fulfilled, state => {
        state.user = null;
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(logOut.rejected, state => state);
  },
});

//Persisting user & token
const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const authPersistedReducer = persistReducer(
  persistConfig,
  authSlice.reducer
);
