import { api } from './apiSlice'
import { ProgramType } from 'components/types/models';

export const extendedApiSlice = api.injectEndpoints({
  endpoints: builder => ({
    getPrograms: builder.query<any, { pageNumber: number }>({
      query: ({ pageNumber }) => `fsm/event/?page=${pageNumber}&is_private=False&party=595cf997-87ed-4914-8791-e551a9497776`,
      transformResponse: (response: any): ProgramType[] => {
        return response.results;
      },
    })
  })
})

export const { useGetProgramsQuery } = extendedApiSlice;