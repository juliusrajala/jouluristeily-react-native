import { combineReducers,  createStore } from 'redux';
import cabins from './Cabins';
import modals from './Modals';
import schedules from './Schedules';
import navi from './ExperimentalNavigation';
import categories from './Categories';

const store = combineReducers({
  cabins,
  modals,
  schedules,
  navi,
  categories
});

export default createStore(store);
