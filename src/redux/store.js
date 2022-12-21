import { configureStore } from '@reduxjs/toolkit';
import filterSlice from './filterSlice';
import { contactsApi } from './contactsApi';
import { authSlice } from './auth/slice';
// import { authApi } from './authApi';

import { authPersistedReducer } from './auth/slice';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

export const store = configureStore({
  reducer: {
    // [authApi.reducerPath]: authApi.reducer,
    auth: authPersistedReducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
    filter: filterSlice.reducer,
  },

  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    contactsApi.middleware,
    // authApi.middleware,
  ],
});

export const persistor = persistStore(store);
