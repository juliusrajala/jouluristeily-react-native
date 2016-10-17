import React, { PropTypes } from 'react';

import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

const CabinItem = ({cabinNumber, cabinDescription}) => {
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
        Hytti: {cabinNumber}
      </Text>
      <Text
        style={styles.cabinListItemDescription}>
        {cabinDescription}
      </Text>
      <View style={styles.cabinListItemHighlight}></View>
    </View>
  )
}

CabinItem.propTypes = {
  cabinNumber: PropTypes.string,
  cabinDescription: PropTypes.string
};

const styles = StyleSheet.create({
  cabinListItem: {
    margin: 10,
    marginLeft: 10,
    marginRight: 10,
    elevation: 1,
    backgroundColor: 'white',
    padding: 35,
    paddingTop: 25
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
    fontSize: 18,
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
    width: 5,
    elevation: 1
  }
})

export default CabinItem;