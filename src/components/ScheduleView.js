import React, { PropTypes } from 'react';
import { View, ScrollView, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import ScheduleItem from './partials/ScheduleItem';

const ScheduleView = ({ schedules }) => {
  console.log('schedules', schedules.toJS())
  const events = schedules.get('events') || false;

  return (
    <View style={ styles.schedules } >
      <Text style={ styles.schedulesTitle }>Aikataulu</Text>
      <ScrollView style={ styles.scheduleList } >
      { events
        ? events.toArray().map((event, i) => <ScheduleItem key={i} event={ event } /> )
        : <Text>No Events</Text>
      }
      </ScrollView>
    </View>
  );
} 

ScheduleView.propTypes = {
  schedules: PropTypes.object
};

const styles = StyleSheet.create({
  schedules: {
    flex: 1,
    bottom: 0,
    left: 0,
    right: 0,
    top: 0
  },
  schedulesTitle: {

  },
  scheduleList: {
    flex: 1,
    right: 0,
    left: 0
  },  
  scheduledEvent: {

  }
});

export default connect(
  (state, props) => ({
    schedules: state.schedules
  }))(ScheduleView);