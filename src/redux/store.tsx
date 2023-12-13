import { configureStore } from '@reduxjs/toolkit'
// Import the API object
import { api } from 'redux/features/SampleApiSlice'

import dataReducer from './reducer';

export const store = configureStore({
  reducer: {
    // Add the generated RTK Query "API slice" caching reducer
    [api.reducerPath]: api.reducer,
    // Add any other reducers
    data: dataReducer,
  },
  // Add the RTK Query API middleware
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(api.middleware)
})