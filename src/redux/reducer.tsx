// import { combineReducers } from 'redux';

// const rootReducer = combineReducers({

//   });
  
//   export type RootState = ReturnType<typeof rootReducer>;
  
//   export default rootReducer;

import { FETCH_DATA } from './action';

interface DataState {
  data: any | null;
}

const initialState: DataState = {
  data: null,
};

const dataReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default dataReducer;