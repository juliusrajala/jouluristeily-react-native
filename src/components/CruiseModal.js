import React, { PropTypes } from 'react';
import {connect } from 'react-redux';

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

const CruiseModal = ({modalId, visible, action, title, description, children}) => {
  return (
    <View style={visible && styles.modalContainer}>
      <Modal
        style={styles.modalContainer}
        animationType={"slide"}
        transparent={true}
        visible={visible}
        onRequestClose={() => {console.log('Modal closed')}}>

        <View
          style={styles.modalHeader}>
          <Text style={styles.modalTitle}>{title || 'Needs title'}</Text>
        </View>
        
        <View
          style={styles.modalContent}>
          <Text style={styles.modalDescription}>
            {description || 'Lisää kuvaus'}
          </Text>

          <Text style={styles.modalFieldLabel}>
            Hyttinumero:
          </Text>
          <TextInput
            style={styles.modalField}
            onChangeText={(text) => this.setState({text})}/>

          <Text style={styles.modalFieldLabel}>
            Hyttikuvaus:
          </Text>
          <TextInput
            style={styles.modalField}
            onChangeText={(text) => this.setState({text})}/>

          <TouchableOpacity
            style={styles.closeModal}
            onPress={() => action(modalId) }>
            <Text
              style={styles.closeModalLabel}>
              VALMIS
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

CruiseModal.propTypes = {
  modalId: PropTypes.string.isRequired,
  visible: PropTypes.bool.isRequired,
  action: PropTypes.func.isRequired,
  title: PropTypes.string,
  children: PropTypes.node
};

const styles = StyleSheet.create({
  modalContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: '#2f2f2f',
    opacity: .7
  },
  modalContent: {
    backgroundColor: '#f2f2f2',
    elevation: 4,
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
    marginTop: 15
  },
  modalField: {
    height: 40,
    color: 'gray',
    borderColor: 'gainsboro', 
    borderWidth: 1
  }
});

export default CruiseModal;