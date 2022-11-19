import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import { Header, Button } from "../../components";
import { styles } from "./index.styles";
import { OtpInput } from "../../components";

export const OtpScreen = ({ navigation }) => {
  const [otpCode, setOTPCode] = useState("");
  const [isPinReady, setIsPinReady] = useState(false);
  const maximumCodeLength = 4;
  return (
    <>
      <View style={styles.container}>
        <Header title="OTP" />
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            Enter the OTP that was sent to your email address to reset password.
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} />
        </View>
        <OtpInput
          code={otpCode}
          setCode={setOTPCode}
          maximumLength={maximumCodeLength}
          setIsPinReady={setIsPinReady}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Continue"
          onPress={() => navigation.navigate("PasswordScreen")}
        />
      </View>
    </>
  );
};

export default OtpScreen;
