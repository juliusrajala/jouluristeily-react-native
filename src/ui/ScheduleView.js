import _ from 'lodash';
import { fromJS } from 'immutable';
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { View, ScrollView, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';

import ScheduleItem from './components/ScheduleItem';
import HoursItem from './components/OpeningHoursItem';
import FloatingActionButton from './components/FloatingActionButton';
import { changeScheduleView } from '../stores/Schedules';
import { isTimeRelevant } from '../utils/dateTime';

const ScheduleView = ({ visible, hours, schedules, changeScheduleView, time }) => {
  const events = schedules.get('events') || false;
  const openingHours = hours.get('hours') || false;
  const sortedEvents = events && events.sort((a, b) => a.get('epochStart') > b.get('epochStart'));
  let tempObject = {};
  const storeCategories = _.uniq(openingHours.map(item => item.get('category'))
    .toJS())
    .map(item => {
      tempObject[item] = openingHours.filter(location => location.get('category') === item).toJS();
    });

  const hoursByCategory = fromJS(tempObject);

  const renderEvents = () => 
    sortedEvents && sortedEvents.toArray().map((event, i) => {
      const epochStart = event.get('epochStart');
      const epochEnd = event.get('epochEnd');
      
      return <ScheduleItem 
        active={ epochEnd === null || (time && isTimeRelevant(time, epochStart, epochEnd))} 
        key={i} event={ event } />
    });

  const renderHours = () => {
    console.log('hoursByCategory', hoursByCategory.toJS())
    return hoursByCategory && hoursByCategory.toArray().map((category, i) => (
        <View key={'hoursCategory'+i}>
          <Text style={styles.categoryLabel} >{category.first().get('category')} - {time}</Text>
          { category.toArray().map((location, j) =>
            <HoursItem currentTime={time && time} key={'hoursitem' + j} location={ location } /> )
          }
        </View> ));
  }

  return (
    <View style={ styles.schedules } >
      <View style={ styles.schedulesHeader }>
        <Text style={ styles.schedulesTitle }>{visible === 'schedule' ? 'Aikataulu' : 'Aukioloajat'}</Text>
      </View>
      
      <ScrollView style={ styles.scheduleList } >
        {visible === 'schedule' ? renderEvents() : renderHours()}
      </ScrollView>

      { visible === 'schedule' 
      ? <FloatingActionButton
        backgroundColor={'firebrick'}
        action={() => changeScheduleView('hours')}>
        <Icon style={ styles.fabLabel } name='cart' color='#fff'/>
      </FloatingActionButton>
      : <FloatingActionButton
        backgroundColor={'firebrick'}
        action={() => changeScheduleView('schedule')}>
        <Icon style={ styles.fabLabel } name='calendar' color='#fff'/>
      </FloatingActionButton>
      }

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
    fontFamily: 'bungee',
    fontWeight: '400',
    fontSize: 20
  },
  scheduleList: {
    flex: 1,
    right: 0,
    left: 0,
    backgroundColor: '#2f2f2f'
  },
  categoryLabel: {
    fontSize: 20,
    color: 'white',
    margin: 5,
    marginLeft: 12,
    fontWeight: '900'
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
