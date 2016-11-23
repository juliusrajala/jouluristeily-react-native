// This store is for storing cabin data.
import { fromJS, Map, List } from 'immutable';
import createAction from '../utils/createAction';
import Store from 'react-native-store';

const localStorage = {
  'cabins': Store.model('cabins')
};

export const cabinActionsTypes = {
  cabin_added: 'cabin_added',
  cabin_removed: 'cabin_removed',
  cabins_loading: 'cabins_loading',
  cabins_loaded: 'cabins_loaded'
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

function mapItems(response){
  if(!response) return {};
  let cabins = {};
  resp.map(cabin => {
    cabins[cabin.cabinNumber] = {
      cabinNumber: cabin.cabinNumber,
      cabinDescription: cabin.cabinDescription
    }
  });
  return cabins;
}

export function getCabinsFromStorage(){
  return dispatch => {
    dispatch(cabinActionsTypes.cabins_loading, true);
    return localStorage.cabins.find()
      .then(resp => {
        console.log('response is,', resp)
        const cabins = mapItems(resp);
        console.log('cabins are', cabins);
        // dispatch(createAction(cabinActionsTypes.cabins_loaded, cabins))
      })
      .catch(err => {
        console.log('Error', err);
      })
  }
}

const initialState = fromJS({
  loading: false,
  ready: false,
  cabins: {}
});

function cabins(state=initialState, action) {
  console.log(action, state.toJS());
  switch(action.type) {
    case cabinActionsTypes.cabins_loading:
      console.log('cabins loading');
      return state;

    case cabinActionsTypes.cabins_loaded:
      console.log('cabins loaded', action.payload)
      return state.set('loading', false)
        .set('ready', true)
        .set('cabins', action.payload.cabins);

    case cabinActionsTypes.cabin_added:
      const cabin = action.payload;
      return state.setIn(['cabins', action.payload.get('cabinNumber')], action.payload);

    case cabinActionsTypes.cabin_removed:
      localStorage.cabins.remove(item => item.cabinNumber !== action.payload);
      return state.set('cabins', state.get('cabins').filter(cabin => cabin.get('cabinNumber') !== action.payload));
    
    default:
      return state;
  }
}

export default cabins;