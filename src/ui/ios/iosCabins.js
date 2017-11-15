import React, {Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';

import { modalActions } from '../../stores/Modals';
import { cabinActions, getCabinsFromStorage } from '../../stores/Cabins';

import CabinItem from '../components/CabinItem';
import FloatingActionButton from '../components/FloatingActionButton';
import CruiseModal from '../components/CruiseModal';

const CabinView = ({ cabins, modals, openModal, addCabin, removeCabin, getCabins}) => {
  const cabinsReady = cabins.get('ready');
  const savedCabins = cabins.get('cabins');
  const addCabinModalId = 'AddCabinModal';

  const renderCabins = () =>
    <ScrollView style={styles.cabinList}>
    { savedCabins.toArray().map((cabin, i) => 
      <CabinItem 
        key={cabin.get('cabinNumber')}
        removeCabin={removeCabin}
        cabinNumber={cabin.get('cabinNumber')}
        cabinDescription={cabin.get('cabinDescription')}
      />
    ) }
    </ScrollView>;

  const renderPlaceHolder = () => 
    <View style={styles.placeholderContainer}>
      <Text style={styles.placeholderText}>
        Sinulla ei ole tallennettuja hyttejä. Voit lisätä hyttejä painamalla nappia.
      </Text>
    </View>;

  return (
    <View style={styles.cabinView}>
      <View style={styles.linkContainer}>
        <TouchableOpacity
          onPress={() => openModal(addCabinModalId)}>
          <Text style={ styles.link }>Lisää hytti</Text>
        </TouchableOpacity>
      </View>

      { cabinsReady && savedCabins.size > 0
        ? renderCabins()
        : renderPlaceHolder() }

      <CruiseModal
        modalId={addCabinModalId}
        addCabin={addCabin}
      />
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
  cabinView: {
    flex: 1,
    backgroundColor: '#fff'
  },
  linkContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    backgroundColor: '#ECEFF1'
  },
  link: {
    fontWeight: '600',
    textAlign: 'center',
    width: 192,
    padding: 10,
    fontSize: 20,
    color: 'firebrick',
    borderWidth: 1,
    borderColor: 'firebrick',
    margin: 5,
    borderRadius: 20,
  },
  addButtonLabel: {
    justifyContent: 'center',
    fontSize: 50,
    fontWeight: '200',
  },
  placeholderContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  placeholderText: {
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '200',
    color: '#363636'
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
