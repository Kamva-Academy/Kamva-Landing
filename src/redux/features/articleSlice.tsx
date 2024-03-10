import { ArticleType } from 'types/General';
import { api } from './apiSlice'

export const extendedApiSlice = api.injectEndpoints({
  endpoints: builder => ({
    getArticles: builder.query<any, { pageNumber: number }>({
      query: ({ pageNumber }) => `fsm/article/?page=${pageNumber}&is_private=False`,
      transformResponse: (response: any): ArticleType[] => {
        return response.results;
      },
    })
  })
})

export const { useGetArticlesQuery } = extendedApiSlice;