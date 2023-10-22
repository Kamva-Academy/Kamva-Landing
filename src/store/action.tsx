// export const increment = () => ({
//     type: 'INCREMENT' as const,
//   });
  
//   export type AppActions = ReturnType<typeof increment>;

export const FETCH_DATA = 'FETCH_DATA';

export const fetchDataAction = (data: any) => ({
  type: FETCH_DATA,
  payload: data,
});
