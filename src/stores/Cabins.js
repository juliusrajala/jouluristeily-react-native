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
  }
};

const initialState = Map({
  homeCabin: '****',
  cabins: {}
});

function cabins(state=initialState, action) {
  switch(action.type) {
    case cabinActionsTypes.cabin_added:
      // With immutable
      return state.setIn(['cabins', action.payload.cabinNumber], action.payload);
      // Without immutable
      // return Object.assign({}, state, 
      //   { 
      //     cabins: [
      //       {
      //         cabinNumber: action.payload.cabinNumber, 
      //         cabinDescription: action.payload.cabinDescription
      //       },
      //       ...state.cabins
      //     ]});
    case cabinActionsTypes.home_cabin:
      return state.set('homeCabin', action.payload.cabinNumber);
    default:
      return state;
  }
}