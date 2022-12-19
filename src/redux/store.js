import { configureStore } from '@reduxjs/toolkit';
import filterSlice from './filterSlice';
import { contactsApi } from './contactsApi';
import { authSlice } from './auth/slice';
// import { authApi } from './authApi';

export const store = configureStore({
  reducer: {
    // [authApi.reducerPath]: authApi.reducer,
    auth: authSlice.reducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
    filter: filterSlice.reducer,
  },

  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
    // authApi.middleware,
  ],
});
