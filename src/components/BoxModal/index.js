import React, { useEffect, useState, useRef } from 'react';
import { View, Modal, Image, Text, Animated } from 'react-native';
import { Button } from '../Button';
import { styles } from './styles';

const ModalPoup = ({ visible, children }) => {
  const [showModal, setShowModal] = useState(visible);
  const scaleValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    toggleModal();
  }, [visible]);

  const toggleModal = () => {
    if (visible) {
      setShowModal(true);
      Animated.spring(scaleValue, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      setTimeout(() => setShowModal(false), 200);
      Animated.timing(scaleValue, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  };

  return (
    <Modal transparent visible={showModal}>
      <View style={styles.modalBackGround}>
        <Animated.View style={[styles.modalContainer, { transform: [{ scale: scaleValue }] }]}>
          {children}
        </Animated.View>
      </View>
    </Modal>
  );
};

export const BoxModal = ({ visible }) => {
  return (
    <View style={styles.container}>
      <ModalPoup visible={visible}>
        <View style={styles.imageContainer}>
          <Image source={require('../../assets/success.png')} style={styles.image} />
        </View>

        <Text style={styles.titleText}>Success!</Text>
        <Text style={styles.text}>Your password has been changed</Text>
        <Button title="Sign in" style={styles.button} />
      </ModalPoup>
    </View>
  );
};

/**  Usage */

// Call the boxmodal component
// set a state
// const [visible, setVisible] = useState(false);

// pass the set state inside the Boxmodal

{
  /* <BoxModal visible={visible}/> */
}

// Then pass the set state inside the onpress button with true
