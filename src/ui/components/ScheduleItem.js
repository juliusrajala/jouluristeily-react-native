import React, {Component, PropTypes} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Animated, Easing} from 'react-native';
import { getTimeFromMilliseconds } from '../../utils/dateTime';

class ScheduleItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // rowAnim: TODO: Grow max-rows to 5
      // hourAnim: TODO: Display both rows.
      dotAnim: new Animated.Value(40),
      flexAnim: new Animated.Value(100),
      open: false
    }
  }

  resizeItem() {
    this.setState({open: !this.state.open});
    this.state.flexAnim._value === 100 ? this.animateToSize(150, 65) : this.animateToSize(100, 40);
  }

  animateToSize(flex, dot) {
    Animated.parallel([
      Animated.timing(this.state.flexAnim, {
        toValue: flex,
        easing: Easing.elastic(2),
        duration: 700
      }),
      Animated.timing(this.state.dotAnim, {
        toValue: dot,
        easing: Easing.elastic(2),
        duration: 700
      })
    ]).start();
  }

  render() {
    const event = this.props.event;
    const active = this.props.active;
    return (
      <Animated.View style={ [styles.item, {height: this.state.flexAnim}] }>
        <View style={ [styles.times, active && activeStyle.times] } >
          <Text style={[styles.hourLabel, active && activeStyle.hourLabel]} >
          { getTimeFromMilliseconds(event.get('epochStart')) }</Text>
          {event.get('epochEnd') && (active || this.state.open) && <Text style={[styles.hourLabel, active && activeStyle.hourLabel]} >
          { getTimeFromMilliseconds(event.get('epochEnd')) }</Text>}
        </View>
        <TouchableOpacity style={styles.bread}
          onPress={() => this.resizeItem()} >
          <Text style={ [styles.breadLabel, active && activeStyle.breadLabel] }>{ event.get('name') }</Text>
          <Text numberOfLines={this.state.open ? 5 : 3} style={[styles.breadText, active && activeStyle.breadLabel]} >{ event.get('description') }</Text>
        </TouchableOpacity>
        <Animated.View style={ [styles.dot, active && activeStyle.dot, {top: this.state.dotAnim}] }></Animated.View>
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
    backgroundColor: 'indianred'
  },
  times: {
    backgroundColor: 'indianred'
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
  },
  times: {
    justifyContent: 'space-around',
    width: 70,
    flexDirection: 'column',
    backgroundColor: 'white',
    borderColor: '#ECEFF1',
    borderRightWidth: 4
  },
  bread: {
    flex: 1,
    backgroundColor: 'white',
    borderColor: '#ECEFF1',
    borderBottomWidth: 2
  },
  hourLabel: {
    textAlign: 'center',    
    fontWeight: '600',
    maxHeight: 20
  },
  breadLabel: {
    paddingLeft: 10,
    paddingTop: 5,
    paddingRight: 10,
    paddingBottom: 5,
    fontWeight: '600'
  },
  breadText: {
    paddingLeft: 10,
    paddingRight: 10
  },
  dot: {
    width: 20,
    height: 20,
    backgroundColor: '#eceff1',
    position: 'absolute',
    borderColor: '#fff',
    borderWidth: 2,
    top: 40,
    left: 58,
    borderRadius: 10
  }
});

export default ScheduleItem;
