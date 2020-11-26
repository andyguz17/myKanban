import { applyMiddleware, createStore, combineReducers } from 'redux';
import { Assignments } from './reducers/assignments';

//Middleware
import thunk from 'redux-thunk';

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      assignments: Assignments,
    }),
    applyMiddleware(thunk)
  );
  return store;
};
