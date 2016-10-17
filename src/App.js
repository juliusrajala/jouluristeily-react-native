import React, { PropTypes } from 'react';
import Navigation from './components/Navigation';
import AppRouter from './core/AppRouter';
import { connect } from 'react-redux';

import { View, StyleSheet } from 'react-native';

const App = ({ route }) => 
  <View style={styles.app}>
    <Navigation route={route} />
    { AppRouter(route) }
  </View>;

const styles = StyleSheet.create({
  app: {
    flex: 1
  }
})

export default connect(
  (state, props) => ({
    route: state.navigation.get('currentView')
  }))(App);