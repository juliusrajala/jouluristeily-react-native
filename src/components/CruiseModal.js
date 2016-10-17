import React, { PropTypes } from 'react';

import {
  View,
  Text,
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
            {children}
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
    alignItems: 'center',
    elevation: 4,
    padding: 20
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
    right: 0,
    bottom: 0,
    fontSize: 15,
    fontWeight: '600',
    color: 'firebrick'
  }
});

export default CruiseModal;