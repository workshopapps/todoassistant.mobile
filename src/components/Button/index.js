import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { styles } from './styles';

export const Button = ({ onPress, style, title }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};
