import React, { PropTypes } from 'react';
import {connect } from 'react-redux';

import { modalActions } from '../../stores/Modals';

// TODO: Turn into a stateful component
// Move most items from CabinView props to here.
// Use react-redux connect to connect this to adding modals instead.

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  StyleSheet
} from 'react-native';

// Props:
// modalId, visible, action, title, description, children

const CruiseModal = React.createClass({
  componentWillMount(){
    console.log(this.props);
  },
  getInitialState(){
    return {
      cabinNumber: '',
      cabinDescription: ''
    }
  },
  closeModal(){
    if(!this.state.cabinNumber || !this.state.cabinDescription)
      return this.props.closeModal(this.props.modalId);

    return Promise.resolve(this.props.addCabin(this.state.cabinNumber, this.state.cabinDescription))
      .then(this.props.closeModal(this.props.modalId));
  },
  render(){
    return (
      <View>
        <Modal
          style={styles.modalContainer}
          animationType={"slide"}
          transparent={false}
          visible={this.props.visible}
          onRequestClose={() => {console.log('Modal closed')}}>

          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>Lisää hytti</Text>
          </View>
          
          <View
            style={styles.modalContent}>
            <Text style={styles.modalDescription}>
              Kirjoita haluamasi hytin numero ja kuvaus ja paina sitten valmis.
            </Text>

            <Text style={styles.modalFieldLabel}>
              Hyttinumero:
            </Text>
            <TextInput
              style={styles.modalField}
              onChangeText={(text) => this.setState({cabinNumber: text})}/>

            <Text style={styles.modalFieldLabel}>
              Hyttikuvaus:
            </Text>
            <TextInput
              style={styles.modalField}
              onChangeText={(text) => this.setState({cabinDescription: text})}/>

            <TouchableOpacity
              style={styles.closeModal}
              onPress={() => this.closeModal() }>
              <Text
                style={styles.closeModalLabel}>
                VALMIS
              </Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    );
  }
});

CruiseModal.propTypes = {
  modalId: PropTypes.string.isRequired,
  visible: PropTypes.bool.isRequired,
  addCabin: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  modalContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    elevation: 2,
    top: 0,
    bottom: 0,
    backgroundColor: '#2f2f2f',
    opacity: .7
  },
  modalContent: {
    backgroundColor: '#f2f2f2',
    flex: 1,
    padding: 40
  },
  modalHeader: {
    alignItems: 'center',
    backgroundColor: 'firebrick'
  },
  modalTitle: {
    color: 'white',
    paddingTop: 20,
    paddingBottom: 20,
    fontSize: 20,
    fontWeight: '200'
  },
  closeModalLabel: {
    position: 'relative',
    textAlign: 'right',
    marginTop: 20,
    fontSize: 15,
    fontWeight: '600',
    color: 'firebrick'
  },
  modalFieldLabel: {
    marginTop: 15,
    fontWeight: '600'
  },
  modalField: {
    height: 40,
    color: 'gray',
    borderColor: 'gainsboro', 
    borderWidth: 1
  }
});

export default connect(
  (state, props) => ({
    visible: state.modals.getIn(['modals', props.modalId], false)
  }),
  dispatch => ({
    closeModal(modalId) {
      dispatch(modalActions.closeModal(modalId));
    }
  }))(CruiseModal);