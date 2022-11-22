import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./index.styles";

const SettingOption = ({icon, name}) => {
  return (
    <TouchableOpacity style={styles.flex}>
      <Icon name={icon} size={20} margin={5}>
        <Text style={styles.text}>{name}</Text>
      </Icon>
      <Icon name="chevron-right">

      </Icon>
    </TouchableOpacity>
  );
};

export default SettingOption;
