import React, { PropTypes } from 'react';

import {
  View,
  Text,
  StyleSheet
} from 'react-native';

const CabinView = React.createClass({
  render(){
    return (
      <View>
        <Text style={styles.cabinTitle}>
          Testing Cabins!
        </Text>
      </View>
    )
  }
});

const styles = StyleSheet.create({
  cabinTitle: {
    backgroundColor: '#efe333',
    justifyContent: 'center'
  }
});

export default CabinView;