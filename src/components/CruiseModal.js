import React, { PropTypes } from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet
} from 'react-native';

const CruiseModal = ({visible, action, title, description}) => {
  const closeModal = () => {
    console.log('Trying to close modal');
  };

  return (
    <View style={styles.addCabinModal}>
      <Modal
        animationType={"slide"}
        transparent={false}
        visible={visible}
        onRequestClose={() => {console.log('Modal closed')}}>
        <View
          style={styles.modalHeader}>
          <Text style={styles.modalTitle}>{title}</Text>
          <Text style={styles.modalDescription}>
          {description || 'Lisää kuvaus'}
          </Text>
        </View>
      </Modal>
    </View>
  );
};

CruiseModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  action: PropTypes.func.isRequired,
  title: PropTypes.title.isRequired
}