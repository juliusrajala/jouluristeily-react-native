import {fromJS} from 'immutable';
import {NavigationExperimental} from 'react-native';

const {StateUtils: NavigationStateUtils} = NavigationExperimental;

const navigationActionTypes = {
  push: 'navigationActionTypes.push',
  pop: 'navigationActionTypes.pop',
  switch: 'navigationActionTypes.switch'
};

const initialState = fromJS({
  tabs: {
    index: 0,
    routes: [
      {key: 'schedule', title: 'SCHEDULE'},
      {key: 'cabins', title: 'CABINS'}
    ]
  }
});

const navigationActions = {
  pushRoute(route){
    return {
      type: navigationActionTypes.push,
      payload: route
    }
  },
  popRoute(){
    return {type: navigationActionTypes.pop}
  },
  switchTab(index){
    return {
      type: navigationActionTypes.switch,
      payload: index
    }
  }
}

function navigationReducer(state = initialState, action){
  switch(action.type){
    case navigationActionTypes.push:
      const route = action.payload;
      const tabs = state.get('tabs');
      const tabKey = tabs.getIn(['routes', tabs.get('index')]).get('key');
      return nextScenes !== scenes
  }
}