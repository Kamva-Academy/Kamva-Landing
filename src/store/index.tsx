// import { createStore } from 'redux';
// import rootReducer from './reducer';

// const store = createStore(rootReducer);

// export default store;


import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import dataReducer from './reducer';

const rootReducer = combineReducers({
  data: dataReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;