import React, { PropTypes } from 'react';

import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';


const NaviTab = ({ navItem, action, active }) => {
  const icon = navItem.get('icon');

  return(
    <TouchableOpacity
      onPress={ () => action(navItem.get('tab')) }
      style={ styles.navigationTab }>
      <Icon style={ styles.navigationIcon } name={ icon } size={ 30 } color="#fff"/>
      { active && <View style={ styles.activeTab }></View> }
    </TouchableOpacity>
  );
}

NaviTab.propTypes = {
  navItem: PropTypes.object,
  action: PropTypes.func,
  active: PropTypes.bool
};

const styles = StyleSheet.create({
  navigationTab: {
    height: 70,
    flex: 1,
    justifyContent: 'space-around'
  },
  navigationLabel: {
    fontSize: 12,
    textAlign: 'center',
    justifyContent: 'flex-start',
    color: 'white',
    fontWeight: '200'
  },
  navigationIcon: {
    fontSize: 40,
    textAlign: 'center',
    justifyContent: 'flex-end',
    color: 'white'
  },
  activeTab: {
    height: 3,
    backgroundColor: 'maroon',
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0
  }
});

export default NaviTab;