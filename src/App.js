import React, { PropTypes } from 'react';
import Navigation from './components/Navigation';
import LandingView from './components/LandingView';
import AppRouter from './core/AppRouter';
import { connect } from 'react-redux';

import { View } from 'react-native';

const App = React.createClass({
  componentDidMount(){
    console.log('App mounting', this.props.route.toJS())
  },
  render(){
    return(
      <View>
        <Navigation />
        { AppRouter(this.props.route.get('currentView')) }
      </View>
    )
  }
})

export default connect(
  (state, props) => ({
    route: state.navigation
  }))(App);