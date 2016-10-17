import React, { PropTypes } from 'react';

import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const NaviTab = ({ navItem, action, active }) => {
  console.log('active', active);
  return(
    <TouchableOpacity
      onPress={ () => action(navItem.get('tab')) }
      style={ styles.navigationTab }>
      <Text
        style={ styles.navigationLabel }>
      { navItem.get('name') }
      </Text>
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
    height: 80,
    flex: 0.33,
    justifyContent: 'space-around'
  },
  navigationLabel: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
    fontWeight: '200'
  },
  activeTab: {
    height: 5,
    backgroundColor: 'maroon',
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0
  }
});

export default NaviTab;