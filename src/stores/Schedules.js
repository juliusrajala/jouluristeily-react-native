import initialState from './initial/schedule';
import { fromJS } from 'immutable';

const EVENT_URL = 'https://jouluristeily-api.herokuapp.com/events';
const HOURS_URL = 'https://jouluristeily-api.herokuapp.com/openingHours';

export const scheduleActions = {
  fetchEvents(){
    fetch(EVENT_URL)
      .then(response => {
        console.log(response);
        return response;
      })
      .then(response => {
        return {
          type: scheduleActionTypes.gotEvents,
          payload: response
        }
      })
  }
}

export const scheduleActionTypes = {
  fetchEvents: 'scheduleActionTypes.fetchEvents',
  gotEvents: 'scheduleActionTypes.gotEvents'
};

function scheduleReducer(state = initialState, action){
  switch(action.type){
    case scheduleActionTypes.gotEvents:
      const data = fromJS(action.payload);
      return data.get('iteration') !== state.get('iteration') ? data : state;
    default:
      return state;
  }
};

export default scheduleReducer;