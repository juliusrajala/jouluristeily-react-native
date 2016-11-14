import { combineReducers,  createStore } from 'redux';

import navigation from './Navigation';
import cabins from './Cabins';
import modals from './Modals';
import schedules from './Schedules';
import navi from './ExperimentalNavigation';

const store = combineReducers({
  cabins,
  navigation,
  modals,
  schedules,
  navi
});

export default createStore(store);