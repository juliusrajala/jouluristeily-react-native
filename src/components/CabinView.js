import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import CabinItem from './CabinItem';
import AddButton from './AddButton';

// TODO: 
// - List of cabins rendered from store
// - Cabin Component


import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

const testCabins = [
  '4531', '5531', '6528',
  '4532', '5532', '6527',
  '4533', '5533', '6526',
  '4534', '5534', '6525',
  '1275', '5535', '6524',
  '1276', '5536', '6523',
  '1277', '5537', '6522',
  '1278', '5538', '6521',
  '1232', '5539', '6529',
  '0191', '5530', '6520'
];

const CabinView = ({ cabins }) => {
  console.log('cabins', cabins.toJS());
  const myCabins = testCabins;

  return (
    <View style={styles.CabinView}>
      <Text style={styles.cabinTitle}>
        Hyttimuistio
      </Text>
      { myCabins.length > 0 &&
        <ScrollView
          style={styles.cabinList}
        >
        { myCabins.map((cabin, i) => 
          <CabinItem key={cabin} cabin={cabin} />
          )
        }
        </ScrollView>
      }
      <AddButton />
    </View>
  )
};

CabinView.propTypes = {
  cabins: PropTypes.object.isRequired
};

const styles = StyleSheet.create({
  CabinView: {
    flex: 1,
    alignItems: 'center',
    bottom: 0,
    left: 0,
    right: 0,
    top: 0
  },
  cabinTitle: {
    padding: 20,
    fontSize: 25,
    fontWeight: '400'
  },
  cabinList: {
    flex: 1
  }
});

export default connect(
  (state, props) => ({
    cabins: state.cabins
  })
)(CabinView);
