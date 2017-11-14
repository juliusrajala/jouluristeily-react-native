import React, { PropTypes } from 'react';

import { StyleSheet, View, Text, TouchableOpacity, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';


const NaviTab = ({ navItem, action, active }) => {
  const icon = navItem.get('icon');

  const styleTitle = title =>
    title.toLowerCase()

  return (
    <TouchableOpacity
      onPress={ () => action(navItem.get('tab')) }
      style={ styles.navigationTab }
    >
      { Platform.OS === 'ios'
        ? <Text style={ [styles.iosText, active && styles.iosTextActive] }>{ navItem.get('label') }</Text>
        : <Icon style={ styles.navigationIcon } name={ icon } size={ 30 } color={ active ? "#fff" : '#FF8A80' } />
      }
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
  iosText: {
    fontSize: 12,
    textAlign: 'center',
    fontWeight: '600',
    justifyContent: 'flex-start',
    color: 'white',
  },
  iosTextActive: {
    fontWeight: '900',
  },
  navigationIcon: {
    fontSize: 40,
    textAlign: 'center',
    justifyContent: 'flex-end'
  },
  activeTab: {
    height: 2,
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0
  }
});

export default NaviTab;