// This store is for storing cabin data.

export const cabinActionsTypes = {
  home_cabin: 'home_cabin',
  cabin_added: 'cabin_added',
  cabin_removed: 'cabin_removed',
  description_changed: 'description_changed'
};

export const cabinActions = {
  setHomeCabin(cabinNumber){
    return {
      type: cabinActionsTypes.home_cabin,
      payload: {
        cabinNumber
      }
    }
  },
  addCabin(cabinNumber, cabinDescription) {
    return {
      type: cabinActionsTypes.cabin_added,
      payload: {
        cabinNumber,
        cabinDescription
      }
    }
  }
};

const initialState = {
  homeCabin: '****',
  cabins: []
};

function cabins(state=initialState, action) {
  switch(action.type) {
    case cabinActionsTypes.cabin_added:
      return Object.assign({}, state, 
        { 
          cabins: [
            {
              cabinNumber: action.payload.cabinNumber, 
              cabinDescription: action.payload.cabinDescription
            },
            ...state.cabins
          ]});

    case cabinActionsTypes.home_cabin:
      return Object.assign({}, state, {homeCabin: action.payload.cabinNumber})
    default:
      return state;
  }
}