import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { modalActions } from '../stores/Modals';
import { cabinActions } from '../stores/Cabins';

import CabinItem from './CabinItem';
import FloatingActionButton from './partials/FloatingActionButton';
import CruiseModal from './CruiseModal';

import {View, Text, ScrollView, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';


const CabinView = ({ cabins, modals, openModal, addCabin }) => {
  const readyCabins = cabins.get('cabins');
  const addCabinModalId = 'AddCabinModal';

  return (
    <View style={styles.CabinView}>
      { readyCabins.size > 0 
        ? <ScrollView style={styles.cabinList}>
        { readyCabins.toArray().map((cabin, i) => 
          <CabinItem 
            key={cabin.get('cabinNumber')} 
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
  cabins: PropTypes.object.isRequired
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
    }
  })
)(CabinView);
