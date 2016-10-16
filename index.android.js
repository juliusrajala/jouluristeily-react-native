/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Navigation from './src/components/Navigation';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class jouluristeilyReactNative extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Navigation />
        <Text style={styles.welcome}>
          Jouluristeily 2016 Ooooh yeah!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('jouluristeilyReactNative', () => jouluristeilyReactNative);
