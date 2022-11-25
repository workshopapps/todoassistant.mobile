import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { Header, Button, Input, BoxModal } from '../../components';
import { styles } from './index.styles';

const PasswordScreen = ({ navigation }) => {
  const [visible, setVisible] = useState(false);
  const onBackPress = () => {
    navigation.navigate('OtpScreen');
  };
  return (
    <>
      <View style={styles.container}>
        <Header title="New Password" iconName="keyboard-backspace" onBackPress={onBackPress} />
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            Your password should be at least 9 characters of lower case and upper case.
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} />
        </View>
        <View style={{ alignItems: 'center' }}>
          <Input label="New Password" placeholder="Enter Password" isPassword />
          <Input label="Confirm Password" placeholder="Enter Password" isPassword />
        </View>
      </View>
      <BoxModal visible={visible} />
      <View style={styles.buttonContainer}>
        <Button title="Continue" onPress={() => setVisible(true)} />
      </View>
    </>
  );
};

export default PasswordScreen;
