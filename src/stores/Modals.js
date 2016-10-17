import {Map, List} from 'immutable';
import createAction from '../utils/createAction';

export const modalActionTypes = {
  open_modal: 'open_modal',
  close_modal: 'close_modal'
};

export const modalActions = {
  openModal(modalId){
    return createAction(modalActionTypes.open_modal, modalId);
  },
  closeModal(modalId){
    return createAction(modalActionTypes.close_modal, modalId);
  }
};

const initialState = Map({
  modals: Map({})
});

function modals(state=initialState, action){
  switch(action.type){
    case modalActionTypes.open_modal:
      console.log('modalStore', state.toJS())
      console.log('payload', action.payload)
      return state.setIn(['modals', action.payload], true);
    case modalActionTypes.close_modal:
      return state.setIn(['modals', action.payload], false);
    default:
      return state;
  }
}

export default modals;