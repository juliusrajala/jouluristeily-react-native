import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import CabinItem from './CabinItem';

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

const AddCabinButton = ({action, target}) => {
  return (
    <TouchableOpacity 
      onPress={() => action(target)}
      style={styles.addButton}>
      <Text style={styles.addButtonLabel}>+</Text>
    </TouchableOpacity>
  )
};

AddCabinButton.propTypes = {
  action: PropTypes.func,
  target: PropTypes.string
};


const styles = StyleSheet.create({
  addButton: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    alignItems: 'center',
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: 'firebrick',
    elevation: 2,
    justifyContent: 'center'
  },
  addButtonLabel: {
    justifyContent: 'center',
    fontSize: 40,
    fontWeight: '200',
    color: 'white'
  },
})

export default AddCabinButton;