import { combineReducers,  createStore } from 'redux';

import navigation from './Navigation';
import cabins from './Cabins';
import modals from './Modals';

const store = combineReducers({
  cabins,
  navigation,
  modals
});

export default createStore(store);