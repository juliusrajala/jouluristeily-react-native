import React, { PropTypes } from 'react';
import NavigationView from './ui/NavigationView';
import { connect } from 'react-redux';

import { View, StyleSheet } from 'react-native';

const App = () => 
  <View style={styles.app}>
    <NavigationView />
  </View>;

const styles = StyleSheet.create({
  app: {
    flex: 1
  }
})

export default App;