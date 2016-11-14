import React, { PropTypes } from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';

const MapView = ({ categories }) => {
  console.log('map', categories.toJS())
  const readyCategories = categories.get('categories') || false;

  return (
    <View style={ styles.map } >
      <Text style={ styles.mapTitle }>Kartta 🌞</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  map: {
    flex: 1,
    bottom: 0,
    left: 0,
    right: 0,
    top: 0
  },
  mapTitle: {
    color: 'black',
    textAlign: 'center',
    fontWeight: '400',
    fontSize: 20
  },
});

MapView.propTypes = {
  categories: PropTypes.object
};

export default connect(
  (state, props) => ({
    categories: state.categories
  }))(MapView);
