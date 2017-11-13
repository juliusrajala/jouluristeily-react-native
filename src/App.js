import React, { PropTypes } from 'react';
import AndroidContainer from './AndroidContainer';
import IOSContainer from './IOSContainer';
import { connect } from 'react-redux';

import { View, StyleSheet, Platform } from 'react-native';

const App = () => 
  <View style={styles.app}>
    { Platform.OS === 'ios'
      ? <IOSContainer />
      : <AndroidContainer />
    }
  </View>;

const styles = StyleSheet.create({
  app: {
    flex: 1
  }
})

export default App;