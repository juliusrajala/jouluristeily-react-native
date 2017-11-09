import React, { PropTypes } from 'react';
import { View, ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { mapActions } from '../stores/Maps';

const MapView = ({ maps, switchMap }) => {
  const readyMaps = maps.toJS();
  const mapTags = readyMaps.mapTags;
  const selected = readyMaps.selected;
  const defaultFile = readyMaps.defaultFile;
  const images = {
      default: require('./images/map.png'),
      shops: require('./images/map_shops.png'),
      bars: require('./images/map_bars.png'),
      restaurants: require('./images/map_restaurants.png')
  }

  return (
    <View style={ styles.container }>
      <View style={ styles.tags }>
        <TouchableOpacity
          onPress={() => switchMap(mapTags.shops)}>
          <Text style={ [styles.tag, selected === mapTags.shops && styles.activeTag] }>Ostokset</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => switchMap(mapTags.bars)}>
          <Text style={ [styles.tag, selected === mapTags.bars && styles.activeTag] }>Baarit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => switchMap(mapTags.restaurants)}>
          <Text style={ [styles.tag, selected === mapTags.restaurants && styles.activeTag] }>Ravintolat</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2f2f2f',
    flex: 1,
    bottom: 0,
    left: 0,
    right: 0,
    top: 0
  },
  map: {
    backgroundColor: '#2f2f2f'
  },
  tags: {
    height: 48,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  tag: {
    fontWeight: '400',
    fontSize: 18,
    fontFamily: 'bungee',
    color: 'gainsboro'
  },
  activeTag: {
    color: '#ffea00'
  }
});

MapView.propTypes = {
  maps: PropTypes.object,
  switchMap: PropTypes.func
};

export default connect(
  (state, props) => ({
    maps: state.maps
  }),
  dispatch => ({
    switchMap(mapTags) {
      dispatch(mapActions.switchMap(mapTags))
    }
  })
)(MapView);
