import React, { PropTypes } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { getTimeFromMilliseconds } from '../../utils/dateTime';

const ScheduleItem = ({ event, active }) => {
  return (
    <View style={ styles.item } >
      <View style={ [styles.times, active && activeStyle.times] } >
        <Text style={[styles.hourLabel, active && activeStyle.hourLabel]} >{ getTimeFromMilliseconds(event.get('startTime')) }</Text>
        {event.get('endTime') && active && <Text style={[styles.hourLabel, active && activeStyle.hourLabel]} >{ getTimeFromMilliseconds(event.get('endTime')) }</Text>}
      </View>
      <View style={styles.bread} >
        <Text style={ styles.breadLabel }>{ event.get('name') }</Text>
        <Text numberOfLines={3} style={styles.breadText} >{ event.get('description') }</Text>
      </View>
      <View style={ [styles.dot, active && activeStyle.dot] }></View>
    </View>
  )
};

ScheduleItem.propTypes = {
  event: PropTypes.object,
  active: PropTypes.bool
};

const activeStyle = StyleSheet.create({
  dot: {
    backgroundColor: 'firebrick' 
  },
  times: {
    backgroundColor: 'firebrick'
  },
  hourLabel: {
    color: 'white'
  }
})

const styles = StyleSheet.create({
  item: {
    height: 100,
    flexDirection: 'row',
    left: 0,
    right: 0,
    elevation: 3,
    borderRadius: 2    
  },
  times: {
    justifyContent: 'space-around',
    width: 70,
    flexDirection: 'column',
    backgroundColor: 'white',
    borderColor: '#2f2f2f',
    borderRightWidth: 4
  },
  bread: {
    flex: 1,
    backgroundColor: 'white',
    borderColor: 'lightgrey',
    borderTopWidth: 1
  },
  hourLabel: {
    textAlign: 'center',    
    fontWeight: '900',
    maxHeight: 20
  },
  breadLabel: {
    paddingLeft: 10,
    paddingTop: 5,
    paddingRight: 10,
    paddingBottom: 5,
    fontWeight: '900'
  },
  breadText: {
    paddingLeft: 10,
    paddingRight: 10
  },
  dot: {
    width: 20,
    height: 20,
    backgroundColor: 'indianred',
    position: 'absolute',
    borderColor: '#2f2f2f',
    borderWidth: 2,
    top: 40,
    left: 58,
    borderRadius: 10
  }
});

export default ScheduleItem;