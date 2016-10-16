// This store is for handling application navigation state.

export const navigationActionTypes = {
  move_to_view: 'move_to_view',
  last_view: 'last_view',
  view_ready: 'view_ready'
};

export const viewTypes = {
  home: 'HOME',
  map: 'MAP',
  schedule: 'SCHEDULE',
  cabin_memo: 'CABIN_MEMO'
}

export const navigationActions = {
  moveToView = (current, next) => {
    return {
      type: navigationActionTypes.move_to_view,
      payload: {
        currentView: current,
        nextView: next
      }
    }
  },
  lastView = () =>
    ({type: navigationActionTypes.last_view}),
}

const initialState = {
  currentView: viewTypes.home,
  lastView: []
};

function navigation(state=initialState, action) {
  switch(action.type) {
    case navigationActionTypes.move_to_view:
      // TODO: Move currentView to top of lastViews list
      // TODO: Set currentView to payload.direction
      return;
    case navigationActionTypes.last_view:
      // TODO: Handle items done while backspace gets pressed.
      return;
    case navigationActionTypes.view_ready:
      return;
    default:
      return state;
  }
}

export default navigation;