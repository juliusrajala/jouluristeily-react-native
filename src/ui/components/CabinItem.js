import React, { PropTypes } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';

const CabinItem = ({cabinNumber, cabinDescription, removeCabin}) => {
  return (
    <View style={ styles.cabinListItem}>
      <View style={ styles.cabinListItemActions}>
        <TouchableOpacity
          onPress={() => removeCabin(cabinNumber)} >
          { Platform.OS === 'ios'
            ? <Text>Poista</Text>
            : <Icon style={ styles.cabinListItemActionButton} name="close" size={40} color="#2f2f2f" />
          }
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
  cabinDescription: PropTypes.string,
  removeCabin: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  cabinListItem: {
    marginTop: 10,
    marginBottom: 10,
    elevation: 1,
    backgroundColor: 'white',
    padding: 35,
    paddingTop: 25,
    borderRadius: 3,
    position: 'relative'
  },
  cabinListItemActions: {
    width: 50,
    height: 50,
    position: 'absolute',
    right: 0,
    top: 10
  },
  cabinListItemActionButton: {
    justifyContent: 'space-around',
    alignSelf: 'center'
  },
  cabinListItemLabel: {
    fontWeight: '900',
    color: 'firebrick',
    fontSize: 18,
    paddingBottom: 5
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