import React, {Component, PropTypes } from 'react';
import { bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';

import { modalActions } from '../stores/Modals';
import { cabinActions, getCabinsFromStorage } from '../stores/Cabins';

import CabinItem from './CabinItem';
import FloatingActionButton from './partials/FloatingActionButton';
import CruiseModal from './CruiseModal';

const CabinView = ({ cabins, modals, openModal, addCabin, removeCabin, getCabins, dispatch }) => {
  if(!cabins.get('ready')){
    console.log('We dont have cabins')
    return (
      <View style={styles.CabinView}>
        <View style={styles.cabinViewPlaceholder}>
          <Text style={styles.placeholderText}>
            Sinulla ei ole tallennettuja hyttejä. Voit lisätä hyttejä painamalla nappia.
          </Text>
        </View>
      </View>
    )
  }

  const savedCabins = cabins.get('cabins');

  console.log('We have cabins');

  const addCabinModalId = 'AddCabinModal';

  return (
    <View style={styles.CabinView}>
      { savedCabins 
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

// console.log(getCabinsFromStorage);

// class CabinView extends Component {
//   componentDidMount(){
//     let {dispatch} = this.props;

//     let action = getCabinsFromStorage();
//     dispatch(action);
//   }

//   render(){
//     return (
//       <View >
//         <Text>
//           Test
//         </Text>
//       </View>
//     ) 
//   }
// }

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
    },
    getCabins(){
      dispatch(getCabinsFromStorage())
        .then(() => {
          console.log('This gets called')
        })
        .catch(err => {
          console.log('Something went wrong', err);
        })
    }
  })
)(CabinView);
