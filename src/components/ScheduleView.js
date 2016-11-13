import React, { PropTypes } from 'react';
import { View, ScrollView, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import ScheduleItem from './partials/ScheduleItem';

const ScheduleView = ({ schedules }) => {
  console.log('schedules', schedules.toJS())
  const events = schedules.get('events') || false;

  return (
    <View style={ styles.schedules } >
      <View style={ styles.schedulesHeader }>
      <Text style={ styles.schedulesTitle }>Aikataulu</Text>
      </View>
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
  schedulesHeader: {
    backgroundColor: '#2f2f2f',
    justifyContent: 'space-around',
    height: 30,
    elevation: 4
  },
  schedulesTitle: {
    color: 'white',
    textAlign: 'center',
    fontWeight: '400',
    fontSize: 20
  },
  scheduleList: {
    flex: 1,
    right: 0,
    left: 0,
    backgroundColor: '#2f2f2f'
  },  
  scheduledEvent: {

  }
});

export default connect(
  (state, props) => ({
    schedules: state.schedules
  }))(ScheduleView);