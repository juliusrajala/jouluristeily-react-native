import React, {Component, PropTypes } from 'react';
import { bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';

import { modalActions } from '../stores/Modals';
import { cabinActions, getCabinsFromStorage } from '../stores/Cabins';

import CabinItem from './components/CabinItem';
import FloatingActionButton from './components/FloatingActionButton';
import CruiseModal from './components/CruiseModal';

const CabinView = ({ cabins, modals, openModal, addCabin, removeCabin, getCabins}) => {
  const cabinsReady = cabins.get('ready');
  const savedCabins = cabins.get('cabins');
  const addCabinModalId = 'AddCabinModal';

  console.log('savedCabins', cabins.toJS())

  return (
    <View style={styles.CabinView}>
      { cabinsReady && savedCabins 
        ? <ScrollView style={styles.cabinList}>
        { savedCabins.toArray().map((cabin, i) => 
          <CabinItem 
            key={cabin.get('cabinNumber')}
            removeCabin={removeCabin}
            cabinNumber={cabin.get('cabinNumber')}
            cabinDescription={cabin.get('cabinDescription')} /> )
        }
        </ScrollView>
        : <View style={styles.cabinViewPlaceholder}>
          <Text style={styles.placeholderText}>
            Sinulla ei ole tallennettuja hyttejä. Voit lisätä hyttejä painamalla nappia.
          </Text>
        </View>
      }
      
      <FloatingActionButton 
        action={() => openModal(addCabinModalId)}
        backgroundColor="firebrick">
        <Icon style={ styles.addButtonLabel } name="plus" color="#fff"/>
      </FloatingActionButton>

      <CruiseModal
        modalId={addCabinModalId}
        addCabin={addCabin} />
    </View>
  )
};

CabinView.propTypes = {
  cabins: PropTypes.object.isRequired,
  modals: PropTypes.object.isRequired,
  openModal: PropTypes.func,
  addCabin: PropTypes.func,
  removeCabin: PropTypes.func,
  dispatch: PropTypes.func
};

const styles = StyleSheet.create({
  CabinView: {
    flex: 1,
    backgroundColor: '#2f2f2f'
  },
  addButtonLabel: {
    justifyContent: 'center',
    fontSize: 50,
    fontWeight: '200',
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
  }),
  dispatch => ({
    openModal(modalId){
      dispatch(modalActions.openModal(modalId));
    },
    addCabin(cabinNumber, cabinDescription){
      dispatch(cabinActions.addCabin(cabinNumber, cabinDescription));
    },
    removeCabin(cabinNumber){
      dispatch(cabinActions.removeCabin(cabinNumber));
    }
  })
)(CabinView);
