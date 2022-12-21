import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { api, setApiToken, removeApiToken } from 'services/api';

const axiosBaseQuery =
  () =>
  async ({ url, method, data, params }) => {
    try {
      const result = await api({ url, method, data, params });
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

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: axiosBaseQuery(),

  tagTypes: ['Contacts'],

  endpoints: builder => ({
    getContacts: builder.query({
      query: () => ({ url: `/contacts`, method: 'GET' }),
      providesTags: ['Contacts'],
    }),

    addContact: builder.mutation({
      query: contact => ({
        url: '/contacts',
        method: 'POST',
        data: contact,
      }),
      invalidatesTags: ['Contacts'],
    }),

    deleteContact: builder.mutation({
      query: id => ({
        url: `/contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contacts'],
    }),

    updateContact: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `/contacts/${id}`,
        method: 'PATCH',
        data: patch,
      }),
      invalidatesTags: ['Contacts'],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
  useUpdateContactMutation,
} = contactsApi;
