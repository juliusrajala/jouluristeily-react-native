// This store is for storing cabin data.
import { Map, List } from 'immutable';
import createAction from '../utils/createAction';

export const cabinActionsTypes = {
  home_cabin: 'home_cabin',
  cabin_added: 'cabin_added',
  cabin_removed: 'cabin_removed',
  description_changed: 'description_changed'
};

export const cabinActions = {
  setHomeCabin(cabinNumber){
    return createAction(cabinActionsTypes.home_cabin, cabinNumber);
  },
  addCabin(cabinNumber, cabinDescription) {
    return createAction(cabinActionsTypes.cabin_added,
      { cabinNumber, cabinDescription });
  },
  removeCabin(cabinNumber){
    return createAction(cabinActionsTypes.cabin_removed, cabinNumber);
  }
};

const initialState = Map({
  homeCabin: '****',
  cabins: {}
});

function cabins(state=initialState, action) {
  console.log(action);
  switch(action.type) {
    case cabinActionsTypes.cabin_added:
      // With immutable
      return state.setIn(['cabins', action.payload.cabinNumber], action.payload);
    case cabinActionsTypes.home_cabin:
      // return state.set('homeCabin', action.payload.cabinNumber);
    case cabinActionsTypes.cabin_removed:
      return state.set('cabins', state.cabins.filter(cabin => cabin.get('cabinNumber') !== action.payload.cabinNumber));
    default:
      return state;
  }
}

export default cabins;