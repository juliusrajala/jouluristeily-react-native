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

export const navigationActions = {
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

// Courtesy of Pepperoni-app-kit
function navigationReducer(state = initialState, action){
  switch(action.type){
    case navigationActionTypes.push: {
      const route = action.payload;
      const tabs = state.get('tabs');
      const tabKey = tabs.getIn(['routes', tabs.get('index')]).get('key');
      const scenes = state.get(tabKey).toJS();
      let nextScenes;

      try {
        nextScenes = NavigationStateUtils.push(scenes, route);
      } catch (e) {
        nextScenes = scenes;
      }

      if(scenes !== nextScenes) {
        return state.set(tabKey, fromJS(nextScenes));
      }
      return state;
    }
    
    case navigationActionTypes.pop: {
      const tabs = state.get('tabs');
      const tabKey = tabs.getIn(['routes', tabs.get('index')]).get('key');
      const scenes = state.get(tabKey)
      const nextScenes = NavigationStateUtils.pop(scenes);

      if(scenes !== nextScenes) {
        return state.set(tabKey, fromJS(nextScenes));
      }
      return state;
    }

    case navigationActionTypes.switch: {
      const tabs = state.get('tabs').toJS();
      const nextTabs = NavigationStateUtils.jumpToIndex(tabs, action.payload);
      if (tabs !== nextTabs) {
        return state.set('tabs', fromJS(nextTabs));
      }
      return state;
    }
    default:
      return state;
  }
}

export default navigationReducer;