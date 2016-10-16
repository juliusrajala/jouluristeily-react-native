import React, { PropTypes } from 'react';
import Navigation from './components/Navigation';
import LandingView from './components/LandingView';
import AppRouter from './core/AppRouter';
import { connect } from 'react-redux';

import { View } from 'react-native';

const App = React.createClass({
  componentDidMount(){
    
  },
  render(){
    console.log('Testing tools');
    console.log('Props are', this.props)
    return(
      <View>
        <Navigation />
        { AppRouter() }
      </View>
    )
  }
})

export default connect(
  (state, props) => ({
    state: state,
    props: props
  }))(App);