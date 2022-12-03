import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './index.styles';
import { useNavigation } from '@react-navigation/native';

const SettingOption = ({ icon, name, screen }) => {
  const navigate = useNavigation();
  
  return (
    <View style={styles.flex}>
      <View style={styles.flex}>
        <Icon name={icon} size={20} margin={5} color="#714DD9" />
        <Text style={styles.text}>{name}</Text>
      </View>

      <TouchableOpacity onPress={() => navigate.navigate(`${screen}`)}>
        <Icon name="chevron-right" color="#714DD9" size={15} />
      </TouchableOpacity>
    </View>
  );
};

export default SettingOption;
