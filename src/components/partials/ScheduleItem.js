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
        <Text numberOfLines={3} style={styles.breadText} >{ event.get('description') }</Text>
      </View>
      <View style={ styles.dot }></View>
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
    elevation: 3,
    marginBottom: 10
  },
  times: {
    justifyContent: 'space-around',
    width: 50,
    flexDirection: 'column',
    backgroundColor: 'white',
    borderRadius: 2    
  },
  bread: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
    marginLeft: 5,
    borderRadius: 2
  },
  hourLabel: {
    textAlign: 'center',    
    fontWeight: '900',
    maxHeight: 20
  },
  breadLabel: {
    fontWeight: '900'
  },
  breadText: {
  },
  dot: {
    width: 20,
    height: 20,
    backgroundColor: 'white',
    position: 'absolute',
    borderColor: 'indianred',
    borderWidth: 2,
    top: 40,
    left: 43,
    borderRadius: 10
  }
});

export default ScheduleItem;