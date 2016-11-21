// This store is for storing cabin data.
import { fromJS, Map, List } from 'immutable';
import createAction from '../utils/createAction';

export const cabinActionsTypes = {
  cabin_added: 'cabin_added',
  cabin_removed: 'cabin_removed'
};

export const cabinActions = {
  addCabin(cabinNumber, cabinDescription) {
    return createAction(cabinActionsTypes.cabin_added,
      Map({ cabinNumber, cabinDescription }));
  },
  removeCabin(cabinNumber){
    return createAction(cabinActionsTypes.cabin_removed, cabinNumber);
  }
};

const initialState = fromJS({
  homeCabin: '****',
  cabins: {}
});

function cabins(state=initialState, action) {
  console.log(action);
  switch(action.type) {
    case cabinActionsTypes.cabin_added:
      // With immutable
      console.log('action payload', action.payload.toJS())
      return state.setIn(['cabins', action.payload.get('cabinNumber')], action.payload);
    case cabinActionsTypes.cabin_removed:
      console.log('payload, cabinNumber', action.payload, state.get('cabins').toJS());
      return state.set('cabins', state.get('cabins').filter(cabin => cabin.get('cabinNumber') !== action.payload));
    default:
      return state;
  }
}

export default cabins;