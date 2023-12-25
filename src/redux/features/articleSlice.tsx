import { ArticleType } from 'types/General';
import { api } from './apiSlice'

export const extendedApiSlice = api.injectEndpoints({
  endpoints: builder => ({
    getArticles: builder.query<ArticleType[], number>({
      query: (page) => `fsm/articles/?page=${page}`,
    })
  })
})

export const { useGetArticlesQuery } = extendedApiSlice;