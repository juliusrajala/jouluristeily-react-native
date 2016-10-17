import React, { PropTypes } from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet
} from 'react-native';

const CruiseModal = ({modalId, visible, action, title, description}) => {
  console.log('visible', visible)
  const closeModal = () => {
    console.log('Trying to close modal');
  };

  return (
    <View style={styles.addCabinModalContainer}>
      <Modal
        style={styles.addCabinModal}
        animationType={"slide"}
        transparent={false}
        visible={visible}
        onRequestClose={() => {console.log('Modal closed')}}>
        <View
          style={styles.modalHeader}>
          <Text style={styles.modalTitle}>{title || 'Needs title'}</Text>
          <Text style={styles.modalDescription}>
          {description || 'Lisää kuvaus'}
          </Text>

          <TouchableOpacity
          onPress={() => action(modalId) }>
          <Text>Close Modal</Text>
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
  title: PropTypes.string
};

const styles = StyleSheet.create({
  addCabinModalContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 100,
    bottom: 0
  },
  addCabinModal: {
    backgroundColor: 'ivory'
  }
});

export default CruiseModal;