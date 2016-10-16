import React, { PropTypes } from 'react';
import { Map } from 'immutable';
import { connect } from 'react-redux';
import NaviTab from './NaviTab';
import { navigationActions } from '../stores/Navigation';

import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';

const navigationItems = [
  Map({name: 'Ohjelma', tab: 'HOME'}),
  Map({name: 'Hytit', tab: 'CABINS'}),
  Map({name: 'Kartta', tab: 'MAP'})
];

const Navigation = ({ route, dispatch }) => {
  console.log(route);
  const switchView = (destination) =>
    dispatch(navigationActions.moveToView(route, destination));

  return (
    <View style={styles.navigation}>
      { navigationItems.map((tab, i) => 
          <NaviTab key={i} active={ tab.get('tab') === route } 
            navItem={tab} action={switchView} />
        )}
    </View>
  );
}

Navigation.propTypes = {
  route: PropTypes.string
}

const styles = StyleSheet.create({
  navigation: {
    position: 'relative',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'firebrick',
    flexDirection: 'row',
    justifyContent: 'space-around',
    elevation: 4
  }
});

export default connect(
  (state, props) => ({ 
    route: state.navigation.get('currentView') 
  }))(Navigation);