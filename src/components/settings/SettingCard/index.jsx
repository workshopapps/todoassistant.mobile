import { View, Text } from 'react-native';
import React from 'react';
import styles from './index.styles';
import SettingOption from '../SettingOption';

const SettingsCard = ({ title, children }) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.card}>{children}</View>
    </View>
  );
};

export default SettingsCard;
