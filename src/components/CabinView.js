import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { modalActions } from '../stores/Modals';

import CabinItem from './CabinItem';
import AddButton from './AddButton';
import CruiseModal from './CruiseModal';

import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

const testCabins = [
  // '4531', '5531', '6528',
  // '4532', '5532', '6527',
  // '4533', '5533', '6526',
  // '4534', '5534', '6525',
  // '1275', '5535', '6524',
  // '1276', '5536', '6523',
  // '1277', '5537', '6522',
  // '1278', '5538', '6521',
  // '1232', '5539', '6529',
  '0191', '5530', '6520'
];

const CabinView = ({ cabins, modals, dispatch }) => {
  console.log('cabins', cabins.toJS());
  console.log('modals', modals.toJS());
  const myCabins = testCabins;
  const addCabinModalId = 'AddCabinModal';
  const editCabinModalId = 'EditCabinModal';

  const openModal = (modalId) => 
    dispatch(modalActions.openModal(modalId));

  const closeModal = (modalId) =>
    dispatch(modalActions.closeModal(modalId));

  return (
    <View style={styles.CabinView}>
      <View style={styles.cabinViewHeader}>
        <Text style={styles.cabinTitle}>
          Hyttimuistio
        </Text>
      </View>
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
      <AddButton action={openModal} target={addCabinModalId} />
      <CruiseModal
        modalId={addCabinModalId}
        action={closeModal}
        visible={ modals.getIn(['modals', addCabinModalId]) || false }
        title="Title"
        />
    </View>
  )
};

CabinView.propTypes = {
  cabins: PropTypes.object.isRequired
};

const styles = StyleSheet.create({
  CabinView: {
    flex: 1,
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
    backgroundColor: '#2f2f2f'
  },
  cabinViewHeader: {
    alignItems: 'center'
  },
  cabinTitle: {
    left: 0,
    right: 0,
    padding: 5,
    fontSize: 25,
    fontWeight: '200',
    borderBottomWidth: 3,
    borderStyle: 'solid',
    borderBottomColor: 'black',
    color: 'white'
  },
  cabinList: {
    flex: 1,
    left: 0,
    right: 0,
  }
});

export default connect(
  (state, props) => ({
    cabins: state.cabins,
    modals: state.modals
  })
)(CabinView);
