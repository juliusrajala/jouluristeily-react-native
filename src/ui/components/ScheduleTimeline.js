import _ from 'lodash';
import { fromJS } from 'immutable';
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { View, ScrollView, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';

import ScheduleItem from './ScheduleItem';
import HoursItem from './OpeningHoursItem';
import { isTimeRelevant } from '../../utils/dateTime';

const ScheduleTimeline = ({ visible, hours, schedules }) => {
  const displayHours = visible !== 'schedule';
  const currentTime = new Date();

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

  const renderEvents = () => sortedEvents && sortedEvents.toArray().map((event, i) => {
    const epochStart = event.get('epochStart');
    const epochEnd = event.get('epochEnd');
    return (
      <ScheduleItem 
        active={ epochEnd === null || (currentTime && isTimeRelevant(currentTime, epochStart, epochEnd))} 
        key={i}
        event={ event }
      />
    )
  });

  const renderHours = () => hoursByCategory && hoursByCategory.toArray().map((category, i) => (
    <View key={'hoursCategory_' + i}>
      <Text style={styles.categoryLabel}>{category.first().get('category')}</Text>
      { category.toArray().map((location, j) =>
        <HoursItem currentTime={currentTime && currentTime} key={'hoursitem' + j} location={ location } /> )
      }
    </View>
  ));


  return (
      <ScrollView style={ styles.scheduleList } >
        {displayHours ? renderHours() : renderEvents()}
      </ScrollView>
  );
};

ScheduleTimeline.propTypes = {
  visible: PropTypes.string,
  schedules: PropTypes.object,
  hours: PropTypes.object,
  changeScheduleView: PropTypes.func
};

const styles = StyleSheet.create({
  scheduleList: {
    flex: 1,
    right: 0,
    left: 0,
    backgroundColor: '#ECEFF1'
  },
  categoryLabel: {
    fontSize: 20,
    color: '#363636',
    margin: 5,
    marginLeft: 12,
    fontWeight: '600'
  },
});

export default connect(
  (state, props) => ({
    visible: state.schedules.get('visible'),
    schedules: state.schedules.get('schedule'),
    hours: state.schedules.get('hours'),
  })
)(ScheduleTimeline);
