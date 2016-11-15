import React, {PropTypes} from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';

const FloatingActionButton = ({action, children, backgroundColor}) => {
  return (
    <TouchableOpacity 
      onPress={() => action()}
      style={[styles.addButton, backgroundColor && {backgroundColor: backgroundColor}]}>
      {children}
    </TouchableOpacity>
  )
};

FloatingActionButton.propTypes = {
  action: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  backgroundColor: PropTypes.string
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
  }
})

export default FloatingActionButton;