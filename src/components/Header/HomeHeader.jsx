/* eslint-disable import/namespace */
import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, TouchableHighlight } from 'react-native';

import icon from '../../assets/profile.jpg';
import Message from '../../assets/svg/message.svg';
import styles from './index.styles';
import Logo from "../../assets/svg/logo.svg"
import UserIcon from "react-native-vector-icons/AntDesign"
import Bell from "react-native-vector-icons/SimpleLineIcons"

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
        <Logo height={26} />
      </View>
      <View style={styles.flexrow1}>
        <TouchableHighlight style={styles.icon}>
          <Bell name="bell" size={24} color="#714DD9" />
        </TouchableHighlight>
        <TouchableOpacity onPress={profileNavigate} style={styles.icon}>
          {/* Message Icon */}
          <UserIcon name="user" size={24} color="#714DD9" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeHeader;
