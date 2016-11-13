import React, { PropTypes } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { getTimeFromMilliseconds } from '../../utils/dateTime';

const ScheduleItem = ({ event }) => {
  return (
    <View style={ styles.item } >
      <View style={styles.times} >
        <Text>{ getTimeFromMilliseconds(event.get('startTime')) }</Text>
      </View>
      <View style={styles.bread} >
        <Text>{ event.get('name') }</Text>
        <Text>{ event.get('description') }</Text>
      </View>
    </View>
  )
};

ScheduleItem.propTypes = {
  event: PropTypes.object
};

const styles = StyleSheet.create({
  item: {
    height: 80,
    flexDirection: 'row',
    left: 0,
    right: 0,
    margin: 5
  },
  times: {
    width: 50
  },
  bread: {
    flex: 1
  }
});

export default ScheduleItem;