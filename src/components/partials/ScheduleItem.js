import React, { PropTypes } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { getTimeFromMilliseconds } from '../../utils/dateTime';

const ScheduleItem = ({ event }) => {
  return (
    <View style={ styles.item } >
      <View style={styles.times} >
        <Text style={styles.hourLabel} >{ getTimeFromMilliseconds(event.get('startTime')) }</Text>
        <Text style={styles.hourLabel} >{ event.get('endTime') && getTimeFromMilliseconds(event.get('endTime')) }</Text>
      </View>
      <View style={styles.bread} >
        <Text style={styles.breadLabel} >{ event.get('name') }</Text>
        <Text numberOfLines={4} style={styles.breadText} >{ event.get('description') }</Text>
      </View>
    </View>
  )
};

ScheduleItem.propTypes = {
  event: PropTypes.object
};

const styles = StyleSheet.create({
  item: {
    height: 100,
    flexDirection: 'row',
    left: 0,
    right: 0,
    margin: 5
  },
  times: {
    backgroundColor: 'indianred',
    justifyContent: 'space-around',
    width: 50,
    flexDirection: 'column'
  },
  bread: {
    flex: 1,
    paddingLeft: 5
  },
  hourLabel: {
    textAlign: 'center',    
    fontWeight: '900'
  },
  breadLabel: {
    fontWeight: '900'
  },
  breadText: {
  }
});

export default ScheduleItem;