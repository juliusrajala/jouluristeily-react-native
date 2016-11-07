import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import CabinItem from './CabinItem';

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

import Icon from 'react-native-vector-icons/EvilIcons';


const AddCabinButton = ({action, faded, target}) => {
  return (
    <TouchableOpacity 
      onPress={() => action(target)}
      style={[styles.addButton, faded && {opacity: .5}]}>
      <Icon style={ styles.addButtonLabel } name="plus" color="#fff"/>
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
    elevation: 2,
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  addButtonLabel: {
    justifyContent: 'center',
    fontSize: 50,
    fontWeight: '200',
    color: 'firebrick'
  },
})

export default AddCabinButton;