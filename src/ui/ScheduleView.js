import _ from 'lodash';
import { fromJS } from 'immutable';
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import FloatingActionButton from './components/FloatingActionButton';
import { changeScheduleView } from '../stores/Schedules';
import ScheduleTimeline from './components/ScheduleTimeline';

const ScheduleView = ({ visible, changeScheduleView }) => {

  const renderFAB = () => {
    return visible === 'schedule' 
      ? <FloatingActionButton
          backgroundColor={'firebrick'}
          action={() => changeScheduleView('hours')}>
        <Icon style={ styles.fabLabel } name='cart' color='#fff'/>
      </FloatingActionButton>
      : <FloatingActionButton
          backgroundColor={'firebrick'}
          action={() => changeScheduleView('schedule')}>
        <Icon style={ styles.fabLabel } name='calendar' color='#fff'/>
      </FloatingActionButton>;
  }

  return (
    <View style={ styles.schedules } >
      <View style={ styles.schedulesHeader }>
        <Text style={ styles.schedulesTitle }>
          {visible === 'schedule' ? 'Aikataulu' : 'Aukioloajat'}
        </Text>
      </View>
      <ScheduleTimeline />
      { renderFAB() }
    </View>
  );
};

ScheduleView.propTypes = {
  visible: PropTypes.string,
  schedules: PropTypes.object,
  hours: PropTypes.object,
  changeScheduleView: PropTypes.func
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
    height: 50,
    elevation: 4
  },
  schedulesTitle: {
    color: 'white',
    textAlign: 'center',
    fontWeight: '400',
    fontSize: 20
  },
  fabLabel: {
    fontSize: 50
  }
});

export default connect(
  (state, props) => ({
    visible: state.schedules.get('visible'),
    schedules: state.schedules.get('schedule'),
    hours: state.schedules.get('hours'),
    time: new Date()
  }),
  dispatch => ({
    changeScheduleView(view) {
      dispatch(changeScheduleView(view))
    }
  }))(ScheduleView);
