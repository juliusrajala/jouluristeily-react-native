import React, {PropTypes} from 'react';
import {TouchableNativeFeedback, View, StyleSheet, Platform} from 'react-native';

const FloatingActionButton = ({action, backgroundColor, target, children}) => {
  if (Platform.OS === 'ios') return null;
  return (
    <TouchableNativeFeedback
      onPress={() => action(target)}
      style={[styles.buttonWrapper]}
      useForeground={true}
      background={TouchableNativeFeedback.Ripple('white', false)}>
      <View style={[styles.addButton, backgroundColor && {backgroundColor: backgroundColor}]}>
        {children}
      </View>
    </TouchableNativeFeedback>
  )
};

FloatingActionButton.propTypes = {
  action: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  backgroundColor: PropTypes.string,
  target: PropTypes.object
};


const styles = StyleSheet.create({
  buttonWrapper: {
    borderRadius: 50,
    width: 70,
    height: 70
  },
  addButton: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    alignItems: 'center',
    width: 70,
    height: 70,
    borderRadius: 50,
    elevation: 4,
    justifyContent: 'center',
  }
})

export default FloatingActionButton;