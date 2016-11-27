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
  cabins_loaded: 'cabins_loaded',
  cabins_error: 'cabins_error'
};

export const cabinActions = {
  addCabin(cabinNumber, cabinDescription) {
    console.log('addCabin called');
    return dispatch => {
      dispatch(createAction(cabinActionsTypes.cabin_added, Map({cabinNumber, cabinDescription})));
      localStorage.cabins.add({
        cabinNumber: cabinNumber,
        cabinDescription: cabinDescription
      });
    }
  },
  removeCabin(cabinNumber){
    return createAction(cabinActionsTypes.cabin_removed, cabinNumber);
  }
};

// Helpers

// mapItems runs over the list of cabins on localStorage and turns them into a js-object.
function mapItems(response){
  let cabins = {};
  response.map(cabin => {
    cabins[cabin.cabinNumber] = {
      cabinNumber: cabin.cabinNumber,
      cabinDescription: cabin.cabinDescription
    }
  });
  return cabins;
}

export function getCabinsFromStorage(){
  console.log('getCabinsFromStorage called');
  return dispatch => {
    dispatch(createAction(cabinActionsTypes.cabins_loading, true));
    return localStorage.cabins.find()
      .then(resp => {
        if(!resp) {
          console.log('No cabins found');
          dispatch(createAction(cabinActionsTypes.cabins_error));
          return Promise.resolve();
        }
        const cabins = mapItems(resp);
        dispatch(createAction(cabinActionsTypes.cabins_loaded, fromJS(cabins)))
      })
      .catch(err => {
        console.log('Error', err);
      });
  }
}

const initialState = fromJS({
  loading: false,
  ready: false,
  cabins: {}
});

function cabins(state=initialState, action) {
  switch(action.type) {
    case cabinActionsTypes.cabins_loading:
      console.log('cabins loading');
      return state.set('loading', true);

    case cabinActionsTypes.cabins_loaded:
      console.log('cabins loaded', action.payload.toJS())
      return state.set('loading', false)
        .set('ready', true)
        .set('cabins', action.payload);

    case cabinActionsTypes.cabins_error:
      console.log('No cabins saved.');
      return state.set('ready', true);

    case cabinActionsTypes.cabin_added:
      console.log('Adding cabin', action.payload.toJS());
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