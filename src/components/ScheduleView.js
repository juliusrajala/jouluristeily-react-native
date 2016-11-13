import React, { PropTypes } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

const ScheduleView = ({ schedules }) => {
  return (
    <View style={ styles.schedules } >
      <Text style={ styles.schedulesTitle }>Aikataulu</Text>
    </View>
  );
} 

ScheduleView.propTypes = {
  schedules: PropTypes.object
};

const styles = StyleSheet.create({
  schedules: {

  },
  schedulesTitle: {

  }
});

export default connect(
  (state, props) => ({
    schedules: state.schedules
  }))(ScheduleView);