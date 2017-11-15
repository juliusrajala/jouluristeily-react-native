// This store is for storing the state of the map selections.
import { fromJS, List } from 'immutable';
import createAction from '../utils/createAction';

export const mapActionsTypes = {
  switch_map: 'switch_map',
};

export const mapActions = {
  switchMap(mapTag) {
    return createAction(mapActionsTypes.switch_map, mapTag);
  }
};

const initialState = fromJS({
  selected: 'default',
  mapTags: {
    default: 'default',
    shops: 'shops',
    bars: 'bars',
    restaurants: 'restaurants',
  }
});

function maps(state=initialState, action) {
  switch(action.type) {
    case mapActionsTypes.switch_map:
      // If the same tag is already selected, select the default, otherwise select the tag:
      return state.set('selected',
        state.get('selected') === action.payload
          ? state.get(['mapTags', 'default'])
          : action.payload);
    default:
      return state;
  }
}

export default maps;
