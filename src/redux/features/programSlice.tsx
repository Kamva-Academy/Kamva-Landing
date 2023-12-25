import { api } from './apiSlice'
import { ProgramType } from 'components/types/models';

export const extendedApiSlice = api.injectEndpoints({
  endpoints: builder => ({
    getPrograms: builder.query<ProgramType[], number>({
      query: (page) => `fsm/event/?page=${page}`,
    })
  })
})

export const { useGetProgramsQuery } = extendedApiSlice;