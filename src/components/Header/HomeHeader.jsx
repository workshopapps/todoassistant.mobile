/* eslint-disable import/namespace */
import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, TouchableHighlight } from 'react-native';

import notify from '../../assets/notify.png';
import ava from '../../assets/ava.png';
import logo1 from '../../assets/logo1.png';
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
        <Image source={logo1} style={{ }} />
      </View>
      <View style={{ display: 'flex', flexDirection: 'row', paddingLeft: 15}}>
        <Image source={notify} style={styles.image} />
        <TouchableOpacity onPress={profileNavigate}>
          {/* Message Icon */}
          <Image source={ava} style={styles.image} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeHeader;
