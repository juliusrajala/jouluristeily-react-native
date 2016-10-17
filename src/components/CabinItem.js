import React, { PropTypes } from 'react';

import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

const CabinItem = ({cabin}) => {
  return (
    <View 
      style={styles.cabinListItem}
      >
      <Text
        style={styles.cabinListItemLabel}
      >
        Hytti: {cabin}
      </Text>
      <Text
        style={styles.cabinListItemDescription}              
      >
        This is a cabin description for cabin {cabin}.
      </Text>
    </View>
  )
}

CabinItem.propTypes = {

};

const styles = StyleSheet.create({
  cabinListItem: {
    padding: 15
  },
  cabinListItemLabel: {
    fontWeight: '900',
    paddingBottom: 5
  },
  cabinListItemDescription: {

  }
})

export default CabinItem;