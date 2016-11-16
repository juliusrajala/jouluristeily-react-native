import React, { PropTypes } from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';
import PhotoView from 'react-native-photo-view';

const MapView = ({ categories }) => {
  console.log('map', categories.toJS())
  const readyCategories = categories.get('categories') || false;

  return (
    <View style={ styles.map } >
      <PhotoView
        style={styles.photoView }
        source={require('./images/map.png')}
        minimumZoomScale={1}
        maximumZoomScale={3}
        androidScaleType="centerInside"
        onLoad={() => console.log("Image loaded!")}
        style={{flex: 1}} />
      <Text style={ styles.mapCategories }>Ostokset Baarit Ravintolat</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  map: {
    backgroundColor: '#2f2f2f',
    flex: 1,
    bottom: 0,
    left: 0,
    right: 0,
    top: 0
  },
  photoView: {
    backgroundColor: '#2f2f2f'
  },
  mapCategories: {
    textAlign: 'center',
    fontWeight: '400',
    fontSize: 20,
    color: 'gainsboro',
    height: 50
  },
});

MapView.propTypes = {
  categories: PropTypes.object
};

export default connect(
  (state, props) => ({
    categories: state.categories
  }))(MapView);
