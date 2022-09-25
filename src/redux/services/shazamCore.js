import {
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreAPi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
    prepareHeaders: (headers) => {
      headers.set(
        'X-RapidAPI-Key',
        '0df5f0b5c7mshb05442b9b285d1cp131d1fjsnad1eff659ba6'
      );

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => '/charts/world' }),
  }),
});

export const { useGetTopChartsQuery } = shazamCoreApi;
