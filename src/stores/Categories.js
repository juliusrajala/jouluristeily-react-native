// This store is for storing the state of the map selections.
import { fromJS, List } from 'immutable';
import createAction from '../utils/createAction';

export const categoryActionsTypes = {
  category_selected: 'category_selected',
  category_unselected: 'category_unselected'
};

export const categoryActions = {
  selectCategory(categoryKey) {
    return createAction(categoryActionsTypes.category_selected, categoryKey);
  },
  selectCategory(categoryKey) {
    return createAction(categoryActionsTypes.category_unselected, categoryKey);
  },
};

const initialState = fromJS({
  shops: {
      description: "Ostokset",
      selected: false
  },
  bars: {
      description: "Baarit",
      selected: false
  },
  restaurants: {
      description: "Ravintolat",
      selected: false
  }
});

function categories(state=initialState, action) {
  console.log(action);
  switch(action.type) {
    case categoryActionsTypes.category_selected:
      // With immutable
      console.log('action payload', action.payload.toJS());
      // TODO: real code
      return state;
      // return state.setIn(['categories', action.payload.get('categoryKey')], action.payload);
    case categoryActionsTypes.category_unselected:
      // TODO: real code
      return state;
      // return state.setIn(['categories', action.payload.get('categoryKey')], action.payload);
    default:
      return state;
  }
}

export default categories;
