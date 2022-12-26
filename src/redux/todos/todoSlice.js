import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const todoApi = createApi({
  reducerPath: 'todosApi ',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://63a8a4f3f4962215b586468f.mockapi.io',
  }),
  tagTypes: ['Todo'],
  endpoints: builder => ({
    fetchTodos: builder.query({
      query: () => `/todos`,
      providesTags: ['Todo'],
    }),
    deleteTodo: builder.mutation({
      query: todoId => ({
        url: `/todos/${todoId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Todo'],
    }),
    createTodo: builder.mutation({
      query: todoContent => ({
        url: `/todos`,
        method: 'POST',
        body: {
          content: todoContent,
        },
      }),
      invalidatesTags: ['Todo'],
    }),
  }),
});

export const {
  useFetchTodosQuery,
  useDeleteTodoMutation,
  useCreateTodoMutation,
} = todoApi;
