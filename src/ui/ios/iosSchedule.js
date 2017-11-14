import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import _ from 'lodash';
import { fromJS } from 'immutable';
import Icon from 'react-native-vector-icons/EvilIcons';
import ScheduleTimeline from '../components/ScheduleTimeline';
import { changeScheduleView } from '../../stores/Schedules';

const scheduleOptions = [
  { label: 'Aikataulut', type: 'schedule' },
  { label: 'Aukioloajat', type: 'hours' }
];

const ScheduleNavigation = (props) => {
  const { selectView, visible } = props;
  return (
    <View style={ styles.schedulesHeader }>
      { scheduleOptions.map(item => 
        <TouchableOpacity
          key={item.type}
          style={ styles.scheduleNavi }
          onPress={() => selectView(item.type) }
        >
          <Text style={ [styles.schedulesTitle, visible === item.type && styles.visibleTitle ] }>{item.label}</Text>
        </TouchableOpacity>
      ) }
    </View>
  );
}

ScheduleNavigation.propTypes = {
  selectView: PropTypes.func.isRequired,
};


const iosSchedule = ({ visible, changeScheduleView }) => {
  return (
    <View style={ styles.schedules } >
      <ScheduleNavigation
        selectView={item => changeScheduleView(item)}
        visible={visible}
      />
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
    borderColor: '#2f2f2f',
    borderBottomWidth: 5,

  },
  scheduleNavi: {
    flex: 1,
    justifyContent: 'space-around',    

  },
  schedulesTitle: {
    color: 'white',
    textAlign: 'center',
    fontWeight: '400',
    fontSize: 20
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
