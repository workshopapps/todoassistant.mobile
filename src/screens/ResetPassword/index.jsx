import { View, Text, TouchableHighlight,  } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Input } from '../../components';

const ResetPasswordScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView
      style={{
        alignItems: 'center',
        padding: 10,
      }}>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <TouchableHighlight onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={22} color="#000" />
        </TouchableHighlight>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            marginLeft: 20,
          }}>
          Reset Password
        </Text>
      </View>
      <View
        style={{
          padding: 10,
        }}>
        <Text style={{
          fontSize: 16,
          marginTop: 10,
          textAlign: 'center',
        }}>
          Enter the email registered with your account and we’ll send an email with instructions to
          reset your password.{' '}
        </Text>

        <Input label="Email Address" />
      </View>
    </SafeAreaView>
  );
};

export default ResetPasswordScreen;
