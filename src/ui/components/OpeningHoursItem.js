import React, {Component, PropTypes} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Animated, Easing} from 'react-native';
import { getTimeFromMilliseconds, isTimeRelevant } from '../../utils/dateTime';

class OpeningHoursItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flexAnim: 100
    }
  }

  componentDidMount() {

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
    const location = this.props.location;
    const currentTime = this.props.currentTime;
    const name = location.get('name');
    const hours = location.get('times');
    const deck = location.get('deck');
    const isActive = hours.filter(whenOpen => {
      return isTimeRelevant(currentTime, whenOpen.get('epochStart'), whenOpen.get('epochEnd'));
    }).size > 0;

    console.log('isTabActive', isActive);

    return (
      <Animated.View style={[styles.item, {height: this.state.flexAnim}]}>
        <View style={styles.itemHeader}>
        <Text style={styles.itemLabel}>{name}</Text>
        <Text>{`Kansi ${deck}`}</Text>
        </View>
        <View style={styles.hoursList}>
        {hours.map((hours, i) => 
          <Text key={i} style={styles.hoursListItem}>{`${getTimeFromMilliseconds(hours.get('epochStart'))} - ${getTimeFromMilliseconds(hours.get('epochEnd'))}`}</Text> 
        )}
        </View>
        <View style={[styles.dot, isActive && {backgroundColor: '#43A047'}]}></View>
      </Animated.View>
    )
  }
}

OpeningHoursItem.propTypes = {
  location: PropTypes.object,
  time: PropTypes.object
};

const styles = StyleSheet.create({
  item: {
    borderLeftColor: 'firebrick',
    borderLeftWidth: 5,
    padding: 5,
    flexDirection: 'row',
    left: 0,
    right: 0,
    elevation: 3,
    borderRadius: 2,
    backgroundColor: 'white',
    margin: 2,
    marginTop: 0,
  },
  itemLabel: {
    fontWeight: '900',
    fontSize: 16,
    color: '#2f2f2f'
  },
  itemHeader: {
    flex: 1
  },
  hoursList: {
    flex: 1,
    height: 60,
    alignSelf: 'center',
    flexDirection: 'column',
  },
  hoursListItem: {
    textAlign: 'center',
    fontWeight: '900',
    height: 20
  },
  dot: {
    width: 20,
    height: 20,
    backgroundColor: 'indianred',
    position: 'absolute',
    bottom: 10,
    elevation: 2,
    left: 5,
    borderRadius: 10
  }
})

export default OpeningHoursItem;
