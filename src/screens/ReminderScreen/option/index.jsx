import { View, Text, TouchableHighlight } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './index.styles';
import { colors } from '../../../utils/colors';

const ReminderOption = ({ title, screen, desc }) => {
  return (
    <View style={styles.flex}>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.desc}>{desc}</Text>
      </View>
      <TouchableHighlight onPress={() => `${screen}`}>
        <Icon name="chevron-down" size={20} color={colors.primary} />
      </TouchableHighlight>
    </View>
  );
};

export default ReminderOption;
