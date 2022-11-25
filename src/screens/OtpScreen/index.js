import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { Header, Button } from '../../components';
import { styles } from './index.styles';
import OTPInputView from '@twotalltotems/react-native-otp-input';

export const OtpScreen = ({ navigation }) => {
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
        <View style={styles.otpContainer}>
          <OTPInputView
            style={styles.otpInput}
            pinCount={4}
            autoFocusOnLoad
            codeInputFieldStyle={styles.underlineStyleBase}
            codeInputHighlightStyle={styles.underlineStyleHighLighted}
            onCodeFilled={(code) => {
              console.log(`Code is ${code}, you are good to go!`);
            }}
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Continue" onPress={() => navigation.navigate('PasswordScreen')} />
      </View>
    </>
  );
};

export default OtpScreen;
