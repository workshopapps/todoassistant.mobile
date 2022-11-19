import React, { useState } from "react";
import { View, Text } from "react-native";
import { Header, Timepicker } from "../../components";
import { styles } from "./index.styles";

const RefreshScreen = () => {
  const onBackPress = () => {
    navigation.navigate("OtpScreen");
  };
  return (
    <View style={styles.container}>
      <Header
        name="Refresh todo list"
        iconName="keyboard-backspace"
        onBackPress={onBackPress}
      />
      <View style={styles.textContainer}>
        <Text style={styles.text}>Set time to refresh your todo-list</Text>
      </View>
      <Timepicker />
    </View>
  );
};

export default RefreshScreen;
