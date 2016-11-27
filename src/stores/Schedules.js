import initialState from './initial/schedule';
import { fromJS } from 'immutable';
import createAction from '../utils/createAction';

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

export function changeScheduleView(view){
  return createAction(scheduleActionTypes.changeView, view);
}

export const scheduleActionTypes = {
  fetchEvents: 'scheduleActionTypes.fetch_events',
  gotEvents: 'scheduleActionTypes.got_events',
  changeView: 'scheduleActionTypes.change_view'
};

function scheduleReducer(state = initialState, action){
  switch(action.type){
    case scheduleActionTypes.gotEvents:
      const data = fromJS(action.payload);
      return data.get('iteration') !== state.get('iteration') ? data : state;
    case scheduleActionTypes.changeView:
      return state.set('visible', action.payload);
    default:
      return state;
  }
};

export default scheduleReducer;