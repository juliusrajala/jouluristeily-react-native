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
  modals: {}
});

function modals(state=initialState, action){
  switch(action.type){
    case modalActionTypes.open_modal:
      return state.setIn(['modals', action.payload.modalId], true);
    case modalActionTypes.close_modal:
      return state.setIn(['modals', action.payload.modalId], false);
  }
}

export default modals;