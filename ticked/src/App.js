import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { OtpScreen } from "./screens";

const Home = () => {
  return (
    <View style={styles.container}>
      <OtpScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Home;
