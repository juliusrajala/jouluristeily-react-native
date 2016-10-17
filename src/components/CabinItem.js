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
      style={ styles.cabinListItem }
      >
      <View style={ styles.cabinListItemActions }>
        <TouchableOpacity>
        <Text style={ styles.cabinListItemActionButton }>Muokkaa</Text>
        </TouchableOpacity>
        <TouchableOpacity>
        <Text style={ styles.cabinListItemActionButton }>Poista</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.cabinListItemLabel}>
        Hytti: {cabin}
      </Text>
      <Text
        style={styles.cabinListItemDescription}>
        This is a cabin description for cabin {cabin}.
      </Text>
      <View style={styles.cabinListItemHighlight}></View>
    </View>
  )
}

CabinItem.propTypes = {

};

const styles = StyleSheet.create({
  cabinListItem: {
    margin: 5,
    marginLeft: 20,
    marginRight: 20,
    elevation: 1,
    backgroundColor: 'white',
    padding: 20,
    paddingLeft: 20
  },
  cabinListItemActions: {
    width: 150,
    flexDirection: 'row',
    position: 'absolute',
    right: 0,
    top: 0
  },
  cabinListItemActionButton: {
    flex: 1,
    padding: 5
  },
  cabinListItemLabel: {
    fontWeight: '900',
    color: 'firebrick',
    paddingBottom: 5
  },
  cabinListItemDescription: {

  },
  cabinListItemHighlight: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    backgroundColor: 'firebrick',
    width: 10,
    elevation: 1
  }
})

export default CabinItem;