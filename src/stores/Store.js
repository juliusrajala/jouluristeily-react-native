import { combineReducers,  createStore } from 'redux';

import navigation from './Navigation';
import cabins from './Cabins';

const store = combineReducers({
  cabins,
  navigation
});

export default createStore(store);