import React, {Component, PropTypes} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Animated, Easing} from 'react-native';
import { getTimeFromMilliseconds } from '../../utils/dateTime';

class ScheduleItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // rowAnim: TODO: Grow max-rows to 5
      // hourAnim: TODO: Display both rows.
      flexAnim: new Animated.Value(100)
    }
  }

  componentDidMount() {

  }

  resizeItem() {
    console.log('Calling for resizeItem', this.state.flexAnim);
    this.state.flexAnim._value === 100 ? this.animateToSize(200) : this.animateToSize(100);
  }

  animateToSize(target) {
    Animated.timing(
      this.state.flexAnim, {
        toValue: target,
        easing: Easing.bounce,
        duration: 1000
      }
    ).start();
  }

  render() {
    const event = this.props.event;
    const active = this.props.active;
    return (
      <Animated.View style={ [styles.item, {height: this.state.flexAnim}] }>
        <View style={ [styles.times, active && activeStyle.times] } >
          <Text style={[styles.hourLabel, active && activeStyle.hourLabel]} >
          { getTimeFromMilliseconds(event.get('startTime')) }</Text>
          {event.get('endTime') && active && <Text style={[styles.hourLabel, active && activeStyle.hourLabel]} >
          { getTimeFromMilliseconds(event.get('endTime')) }</Text>}
        </View>
        <TouchableOpacity style={styles.bread}
        onPress={() => this.resizeItem()} >
          <Text style={ [styles.breadLabel, active && activeStyle.breadLabel] }>{ event.get('name') }</Text>
          <Text numberOfLines={3} style={[styles.breadText, active && activeStyle.breadLabel]} >{ event.get('description') }</Text>
        </TouchableOpacity>
        <View style={ [styles.dot, active && activeStyle.dot] }></View>
      </Animated.View>
    )
  }
}

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
  },
  breadLabel: {
    color: '#2f2f2f'
  }
})

const styles = StyleSheet.create({
  item: {
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
