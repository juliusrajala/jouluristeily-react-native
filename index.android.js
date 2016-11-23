/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { AppRegistry } from 'react-native';
import configureStore from './src/stores/Store';
import App from './src/App';

const store = configureStore();

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
