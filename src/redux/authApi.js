import { createApi } from '@reduxjs/toolkit/query';
import { BASE_URL } from 'utils/configData';
import axios from 'axios';

// const setToken = token => {
//   axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
// };

// const removeToken = () => {
//   axios.defaults.headers.common['Authorization'] = '';
// };

const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: '' }) =>
  async ({ url, method, data, params }) => {
    try {
      const result = await axios({ url: baseUrl + url, method, data, params });
      return { data: result.data };
    } catch (axiosError) {
      let err = axiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };

export const authApi = createApi({
  reducerPath: 'auth',
  baseQuery: axiosBaseQuery({
    baseUrl: BASE_URL,
  }),
  prepareHeaders: (headers, { getState }) => {
    // By default, if we have a token in the store, let's use that for authenticated requests
    const token = getState().auth.token;
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }
    return headers;
  },
  endpoints(build) {
    return {
      //   query: build.query({
      //     query: () => ({ url: '/query', method: 'get' }),
      //   }),
      signUp: build.mutation({
        query: user => ({ url: '/users/signup', method: 'post', body: user }),
      }),

      logIn: build.mutation({
        query: user => ({ url: '/users/login', method: 'post', body: user }),
      }),
      logOut: build.mutation({
        query: () => ({ url: '/users/logout', method: 'post' }),
      }),
    };
  },
});

// export const {} = authApi;
