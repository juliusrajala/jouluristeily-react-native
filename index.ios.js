/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { AppRegistry } from 'react-native';
import rootReducer from './src/stores/Store';
import App from './src/App';

const store = compose(applyMiddleware(thunk))(createStore)(rootReducer);

class jouluristeilyReactNative extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('jouluristeilyReactNative', () => jouluristeilyReactNative);
