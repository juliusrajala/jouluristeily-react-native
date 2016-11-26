import React, { PropTypes } from 'react';
import { View, ScrollView, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import ScheduleItem from './components/ScheduleItem';
import FloatingActionButton from './components/FloatingActionButton';
import Icon from 'react-native-vector-icons/EvilIcons';

const ScheduleView = ({ schedules }) => {
  const events = schedules.get('events') || false;
  const sortedEvents = events && events.sort((a, b) => 
    a.get('startTime') > b.get('startTime'));
  console.log(new Date().getTime())

  return (
    <View style={ styles.schedules } >
      <View style={ styles.schedulesHeader }>
      <Text style={ styles.schedulesTitle }>Aikataulu</Text>
      </View>
      <ScrollView style={ styles.scheduleList } >
      { sortedEvents
        ? sortedEvents.toArray().map((event, i) => 
          <ScheduleItem active={i===2} key={i} event={ event } /> )
        : <Text>No Events</Text>
      }
      </ScrollView>
      <FloatingActionButton 
        backgroundColor={'firebrick'}
        action={() => {console.log('testi');}}>
        <Icon style={ styles.fabLabel } name='cart' color='#fff'/>
      </FloatingActionButton>
    </View>
  );
};

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

  },
  fabLabel: {
    fontSize: 40
  }
});

export default connect(
  (state, props) => ({
    schedules: state.schedules
  }))(ScheduleView);