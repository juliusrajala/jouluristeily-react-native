import React, { PropTyoes } from 'react';
import { connect } from 'react-redux';
import { navigationActions } from '../stores/Navigation';

import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';

const Navigation = React.createClass({
  tabs: ['HOME', 'CABIN_MEMO', 'Tab 3'], // Placeholders to be caught from stores.
  switchTab(location){
    return this.props.dispatch(navigationActions.moveToView(this.props.route.get('currentView'), location));
  },
  componentWillMount(){
    console.log('Navigation will mount', this.props)
  },
  render() {
    return (
      // TODO: Move navigationTab into a component of its own.
      <View style={styles.navigation}>
      { this.tabs.map((tab, i) => 
          <TouchableHighlight 
            key={i} 
            style={ styles.navigationTab }
            onPress={() => this.switchTab(tab) }>
            <Text>{tab} {i}</Text>
          </TouchableHighlight>
        )
      }
      </View>
    );
  }
});

const styles = StyleSheet.create({
  navigation: {
    position: 'relative',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#eee',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  navigationTab: {
    height: 30
  }
});

export default connect(
  (state, props) => ({
    route: state.navigation
  }))(Navigation);
