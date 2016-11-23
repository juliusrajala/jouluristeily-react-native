import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
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

function configureStore(preloadedState){
 return createStore(
   rootReducer, 
   preloadedState, 
   applyMiddleware(
     thunkMiddleware
   )
  );
}

export default configureStore;