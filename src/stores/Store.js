import { combineReducers,  createStore } from 'redux';
import cabins from './Cabins';
import modals from './Modals';
import schedules from './Schedules';
import navi from './ExperimentalNavigation';
import maps from './Maps';

const store = combineReducers({
  cabins,
  modals,
  schedules,
  navi,
  maps
});

export default createStore(store);
