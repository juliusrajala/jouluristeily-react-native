import React, { PropTypes } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

const ScheduleView = ({ schedules }) => {
  console.log('schedules', schedules.toJS())
  const events = schedules.get('events') || false;

  return (
    <View style={ styles.schedules } >
      <Text style={ styles.schedulesTitle }>Aikataulu</Text>
      { events
        ? events.map((event, i) => {
          const startTime = new Date(event.get('startTime'));
          return (
            <View key={i} style={ styles.scheduledEvent } >
              <Text>{event.get('name')}</Text>
              <Text>{ startTime.toString() }</Text>
              <Text>{event.get('description')}</Text>
            </View>
          )
        })
        : <Text>No Events</Text>

      }
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

  },
  scheduledEvent: {

  }
});

export default connect(
  (state, props) => ({
    schedules: state.schedules
  }))(ScheduleView);