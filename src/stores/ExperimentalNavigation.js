import { fromJS } from 'immutable';
import { NavigationExperimental } from 'react-native';
import { getCabinsFromStorage } from './Cabins';
import navigationState from './initial/navigationState';

const {
  StateUtils: NavigationStateUtils
} = NavigationExperimental;

const navigationActionTypes = {
  push: 'navigationActionTypes.push',
  pop: 'navigationActionTypes.pop',
  switch: 'navigationActionTypes.switch',
  load: 'navigationActionTypes.load'
};

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
  loadView(index){
    if(index === 1){
      return dispatch => {
        dispatch(getCabinsFromStorage())
          .then(response => {
            dispatch({
              type: navigationActionTypes.switch,
              payload: index
            });
          })
      }
    }
    return {
      type: navigationActionTypes.switch,
      payload: index
    }
  },
  switchTab(index){
    return {
      type: navigationActionTypes.switch,
      payload: index
    }
  }
}

// Courtesy of Pepperoni-app-kit
function navigationReducer(state = navigationState, action){
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
      const scenes = state.get(tabKey).toJS();
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
