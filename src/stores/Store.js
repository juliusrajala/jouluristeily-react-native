import { combineReducers,  createStore } from 'redux';

import navigation from './Navigation';
import cabins from './Cabins';
import modals from './Modals';
import schedules from './Schedules';

const store = combineReducers({
  cabins,
  navigation,
  modals,
  schedules
});

export default createStore(store);