import React from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";

const OtpScreen = ({ navigation }) => {
  const onBack = () => {
    navigation.navigate("Splash");
  };
  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center", marginTop: 50 }}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>OTP</Text>
      </View>
      <View style={{ marginTop: 20, paddingHorizontal: 50 }}>
        <Text>
          Enter the OTP that was sent to your email address to reset password.
        </Text>
      </View>
      <TextInput />
      <TextInput />
      <TextInput />
      <TextInput />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 20,
  },
});

export default OtpScreen;
