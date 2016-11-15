import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { modalActions } from '../stores/Modals';
import { cabinActions } from '../stores/Cabins';

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

const CabinView = ({ cabins, modals, dispatch }) => {
  const readyCabins = cabins.get('cabins');

  console.log('cabins are', cabins.toJS())
  const addCabinModalId = 'AddCabinModal';
  const editCabinModalId = 'EditCabinModal';

  const openModal = (modalId) => 
    dispatch(modalActions.openModal(modalId));

  return (
    <View style={styles.CabinView}>

      { readyCabins.size > 0 
        ? <ScrollView
          style={styles.cabinList}
        >
        { readyCabins.toArray().map((cabin, i) => 
          <CabinItem 
            key={cabin.get('cabinNumber')} 
            cabinNumber={cabin.get('cabinNumber')} 
            cabinDescription={cabin.get('cabinDescription')} />
          )
        }
        </ScrollView>
        : <View style={styles.cabinViewPlaceholder}>
        <Text style={styles.placeholderText}>
          Sinulla ei ole tallennettuja hyttejä. Voit lisätä hyttejä painamalla nappia.
        </Text>
      </View>
      }
      <AddButton 
        action={openModal} 
        target={addCabinModalId} />

      <CruiseModal
        modalId={addCabinModalId}
        visible={ modals.getIn(['modals', addCabinModalId]) || false }/>
    </View>
  )
};

CabinView.propTypes = {
  cabins: PropTypes.object.isRequired
};

const styles = StyleSheet.create({
  CabinView: {
    flex: 1,
    backgroundColor: '#2f2f2f'
  },
  cabinViewPlaceholder: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  placeholderText: {
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '200',
    color: 'gainsboro'
  },
  cabinList: {
    flex: 1,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  }
});

export default connect(
  (state, props) => ({
    cabins: state.cabins,
    modals: state.modals
  })
)(CabinView);
