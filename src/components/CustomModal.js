import React from 'react';
import { View, StyleSheet, Modal } from 'react-native';

function CustomModal({ show, onCloseModal, children, customStyles, customBackdropStyle, backDropPress }) {

    return (
        <Modal visible={show} onRequestClose={onCloseModal} transparent={true} animationType="fade">
            <View onTouchEnd={backDropPress}
                style={{ ...styles.modalContainer, ...customBackdropStyle }}>
                <View style={[styles.modalStyle, customStyles]}>
                    {children}
                </View>
            </View>
        </Modal>
    )
}

export default CustomModal;

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },

    modalStyle: {
        width: '95%',
        borderRadius: 30,
    },
});