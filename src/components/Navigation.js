import React, { PropTypes } from 'react';
import { fromJS } from 'immutable';
import { connect } from 'react-redux';
import NaviTab from './NaviTab';
import { navigationActions } from '../stores/Navigation';

import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';

const navigationItems = fromJS([
  {name: 'Ohjelma', tab: 'SCHEDULE', icon: 'clock'},
  {name: 'Hytit', tab: 'CABINS', icon: 'heart'},
  {name: 'Kartta', tab: 'MAP', icon: 'location'},
  {name: 'Menu', tab: 'MENU', icon: 'navicon'}
]);

const Navigation = ({ route, dispatch }) => {
  const switchView = (destination) =>
    dispatch(navigationActions.moveToView(route, destination));

  return (
    <View style={ styles.navigation }>
      { navigationItems.map((tab, i) => 
          <NaviTab key={i} active={ tab.get('tab') === route } 
            navItem={tab} action={switchView} />
        )
      }
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
    route: state.navigation.get('currentView'),
  }))(Navigation);