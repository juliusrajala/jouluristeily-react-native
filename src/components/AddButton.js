import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import CabinItem from './CabinItem';

import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

const AddCabinButton = ({action}) => {
  return (
    <TouchableOpacity style={styles.addButton}>
      <Text style={styles.addButtonLabel}>+</Text>
    </TouchableOpacity>
  )
};

AddCabinButton.propTypes = {
  action: PropTypes.func
};


const styles = StyleSheet.create({
  addButton: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    alignItems: 'center',
    width: 70,
    height: 70,
    borderRadius: 50,
    backgroundColor: 'firebrick',
    elevation: 3,
    justifyContent: 'center'
  },
  addButtonLabel: {
    justifyContent: 'center',
    fontSize: 40,
    fontWeight: '500',
    color: 'white'
  },
})

export default AddCabinButton;