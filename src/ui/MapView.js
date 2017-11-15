import React, { PropTypes } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';
import { mapActions } from '../stores/Maps';
import ZoomableImage from './components/ZoomableImage';

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

  const mapSource = require('./images/map.png');

  return (
    <View style={ styles.container }>
    
    <View style={ styles.mapHeader }>
      <Text style={ styles.mapTitle }>Laivakartta</Text>
    </View>
      <ZoomableImage imageSource={mapSource} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ECEFF1',
    flex: 1,
    bottom: 0,
    left: 0,
    right: 0,
    top: 0
  },
  mapContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  tags: {
    padding: 30,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  tag: {
    fontWeight: '400',
    fontSize: 18,
    color: '#fff'
  },
  activeTag: {
    fontWeight: '600',
  },
  mapHeader: {
    justifyContent: 'space-around',
    height: 100,
    elevation: 4
  },
  mapTitle: {
    color: 'firebrick',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 20
  },
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
