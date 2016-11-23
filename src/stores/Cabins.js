// This store is for storing cabin data.
import { fromJS, Map, List } from 'immutable';
import createAction from '../utils/createAction';
import Store from 'react-native-store';

const localStorage = {
  'cabins': Store.model('cabins')
};

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

export function getCabinsFromStorage(){
  return Promise.resolve(localStorage.cabins.find())
    .then(resp => {
      console.log('response is,', resp)
      let cabins = {}; 
      resp.map(cabin => {
        cabins[cabin.cabinNumber] = {
          cabinNumber: cabin.cabinNumber,
          cabinDescription: cabin.cabinDescription
        }
      })
      console.log('cabins are', cabins);
    });
}

const initialState = fromJS({
  cabins: {}
});

function cabins(state=initialState, action) {
  console.log(action, state.toJS());
  switch(action.type) {
    // case navigationActionTypes.switch:
    case cabinActionsTypes.cabin_added:
      const cabin = action.payload;
      // localStorage.cabins.add({
      //   cabinNumber: cabin.get('cabinNumber'), 
      //   cabinDescription: cabin.get('cabinDescription')
      // });
      return state.setIn(['cabins', action.payload.get('cabinNumber')], action.payload);
    case cabinActionsTypes.cabin_removed:
      localStorage.cabins.remove(item => item.cabinNumber !== action.payload);
      return state.set('cabins', state.get('cabins').filter(cabin => cabin.get('cabinNumber') !== action.payload));
    default:
      return state;
  }
}

export default cabins;