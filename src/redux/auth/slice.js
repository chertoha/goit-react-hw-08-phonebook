import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut, refreshUser, signUp } from './operations';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const initialState = {
  user: null,
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
    resetError(state) {
      state.error = null;
    },
  },
  extraReducers: builder => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
      .addCase(signUp.pending, state => state)
      .addCase(signUp.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(logIn.pending, state => state)
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logIn.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(logOut.pending, state => state)
      .addCase(logOut.fulfilled, state => {
        state.user = null;
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(logOut.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, (state, action) => {
        state.isRefreshing = false;
        state.error = action.payload;
      });
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

export const { resetError } = authSlice.actions;
