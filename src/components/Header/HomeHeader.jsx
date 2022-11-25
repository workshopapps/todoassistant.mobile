/* eslint-disable import/namespace */
import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, TouchableHighlight } from 'react-native';

import icon from '../../assets/profile.jpg';
import Message from '../../assets/svg/message.svg';
import styles from './index.styles';

const HomeHeader = () => {
  const navigation = useNavigation();

  const profileNavigate = () => {
    navigation.navigate('Profile');
  };

  useEffect(() => {
    profileNavigate();
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.flexrow}>
          <Text style={styles.title}>Home</Text>
        </View>
        <Text style={styles.text}>Let's get you started!</Text>
      </View>
      <View style={styles.flexrow1}>
        <TouchableHighlight style={styles.m_4}>
          <Message />
        </TouchableHighlight>
        <TouchableOpacity onPress={profileNavigate}>
          {/* Message Icon */}
          <Image source={icon} style={styles.image} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeHeader;
