import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import _ from 'lodash';
import { fromJS } from 'immutable';
import Icon from 'react-native-vector-icons/EvilIcons';
import ScheduleTimeline from '../components/ScheduleTimeline';
import { changeScheduleView } from '../../stores/Schedules';


const iosSchedule = ({ visible, changeScheduleView }) => {
  const buttonLabel = visible !== 'schedule' ? 'Aikataulut' : 'Aukioloajat';
  const buttonTarget = visible !== 'schedule' ? 'schedule' : 'hours';
  return (
    <View style={ styles.schedules } >
      <View style={styles.linkContainer}>
        <TouchableOpacity
          onPress={() => changeScheduleView(buttonTarget)}>
          <Text style={ styles.link }>{buttonLabel}</Text>
        </TouchableOpacity>
      </View>
      <ScheduleTimeline />
    </View>
  );
};

iosSchedule.propTypes = {
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
    backgroundColor: 'firebrick',
    height: 70,
    elevation: 4,
    flexDirection: 'row',
    borderBottomWidth: 3,
    borderColor: '#363636',
  },
  scheduleNavi: {
    flex: 1,
    justifyContent: 'space-around',
  },
  linkContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    backgroundColor: '#ECEFF1'
  },
  link: {
    fontWeight: '600',
    textAlign: 'center',
    width: 192,
    padding: 10,
    fontSize: 20,
    color: 'firebrick',
    borderWidth: 1,
    borderColor: 'firebrick',
    margin: 5,
    borderRadius: 20,
  },
  schedulesTitle: {
    color: 'white',
    textAlign: 'center',
    fontWeight: '200',
    fontSize: 16
  },
  visibleTitle: {
    fontWeight: '600',
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
  }),
  dispatch => ({
    changeScheduleView: (view) => dispatch(changeScheduleView(view))
  })
)(iosSchedule);
