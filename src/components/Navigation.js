import React, { PropTyoes } from 'react';

import { StyleSheet, View, Text } from 'react-native';

const Navigation = React.createClass({
  tabs: ['Tab 1', 'Tab 2', 'Tab 3'], // Placeholders to be caught from stores.
  render() {
    return (
      // TODO: Move navigationTab into a component of its own.
      <View style={styles.navigation}>
      { this.tabs.map((tab, i) => 
          <View key={i} style={styles.navigationTab}>
            <Text >{tab}</Text>
          </View>
        )
      }
      </View>
    );
  }
});

const styles = StyleSheet.create({
  navigation: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#eee',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  navigationTab: {
  }
});

export default Navigation;