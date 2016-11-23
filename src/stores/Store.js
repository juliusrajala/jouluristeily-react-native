import {combineReducers} from 'redux';
import thunk from 'redux-thunk';
import cabins from './Cabins';
import modals from './Modals';
import schedules from './Schedules';
import navi from './ExperimentalNavigation';

const rootReducer = combineReducers({
  cabins,
  modals,
  schedules,
  navi
});

export default rootReducer;