import React, { PropTypes } from 'react';
import { fromJS } from 'immutable';
import { connect } from 'react-redux';
import NaviTab from './NaviTab';

import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';

const NavigationBar = ({ tabs, currentTabIndex, switchTab }) => {
  const routes = tabs.get('routes');
  console.log('routes', routes.toJS())
  return (
    <View style={ styles.navigation }>
      { routes.toArray().map((tab, i) => 
        <NaviTab
          key={i}
          active={ i === currentTabIndex } 
          navItem={tab}
          action={() => switchTab(i)}
        />
      ) }
    </View>
  );
}

NavigationBar.propTypes = {
  route: PropTypes.string,
  currentTabIndex: PropTypes.number,
  switchTab: PropTypes.func
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

export default NavigationBar;