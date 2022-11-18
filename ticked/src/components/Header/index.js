import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { styles } from "./styles";

export const Header = ({ onBackPress, name, title }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onBackPress} style={styles.backStyle}>
        <Icon name="keyboard-backspace" size={24} color="#292D32" />
        <Text style={styles.name}>{name}</Text>
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};
