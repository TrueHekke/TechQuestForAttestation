import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.github.com/search",
  }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: ({username,params,page}) =>({
        url: `/users?q=${username}&sort=repositories&order=${params}&per_page=10&page=${page}`
      }),
    }),
  }),
});

export const { useGetUsersQuery } = userApi;