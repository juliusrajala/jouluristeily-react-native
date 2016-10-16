import React, { PropTypes } from 'react';

import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const NaviTab = ({ navItem, action }) => 
  <TouchableOpacity
    onPress={ () => action(navItem.get('tab')) }
    style={styles.navigationTab}>
    <Text
      style={styles.navigationLabel}>
    { navItem.get('name').toUpperCase() }
    </Text>
  </TouchableOpacity>;

NaviTab.propTypes = {
  navItem: PropTypes.object,
  action: PropTypes.func
};

const styles = StyleSheet.create({
  navigationTab: {
    height: 80,
    flex: 0.33,
    justifyContent: 'space-around',
  },
  navigationLabel: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
    fontWeight: '900'
  }
});

export default NaviTab;