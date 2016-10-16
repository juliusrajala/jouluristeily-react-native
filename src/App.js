import React, { PropTypes } from 'react';
import Navigation from './components/Navigation';
import AppRouter from './core/AppRouter';
import { connect } from 'react-redux';

import { View } from 'react-native';

const App = ({ route }) => 
  <View>
    <Navigation route={route} />
    { AppRouter(route) }
  </View>;

export default connect(
  (state, props) => ({
    route: state.navigation.get('currentView')
  }))(App);