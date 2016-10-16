import React, { PropTypes } from 'react';
import Navigation from './components/Navigation';
import LandingView from './components/LandingView';

import { View } from 'react-native';

const App = React.createClass({
  render(){
    return(
      <View>
        <Navigation />
        <LandingView />
      </View>
    )
  }
})

export default App;