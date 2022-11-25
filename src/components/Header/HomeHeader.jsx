/* eslint-disable import/namespace */
import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import { View, Text, Image, TouchableOpacity, TouchableHighlight } from 'react-native';

import icon from '../../assets/profile.jpg';
import Message from '../../assets/svg/message.svg';
import { AuthContext } from '../../context/userContext';
import styles from './index.styles';

const HomeHeader = () => {
  const { userInfo } = useContext(AuthContext);

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.flexrow}>
          <Text style={styles.title}>Welcome Home, {userInfo.email} </Text>
        </View>
        <Text style={styles.text}>Let's get you started!</Text>
      </View>
      <View style={styles.flexrow1}>
        <TouchableHighlight style={styles.m_4}>
          <Message />
        </TouchableHighlight>
        <TouchableOpacity onPress={navigation.navigate('Profile')}>
          {/* Message Icon */}
          <Image source={icon} style={styles.image} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeHeader;
