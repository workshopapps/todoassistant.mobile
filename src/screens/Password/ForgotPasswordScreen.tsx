import {View, Text, TouchableHighlight} from 'react-native';
import React from 'react';
import {EnvelopeIcon} from 'react-native-heroicons/solid';
import {
  NavigationContainer,
  useNavigation, 
  useNavigationContainerRef,
} from '@react-navigation/native';
import {Button, TextInput} from 'react-native-paper';
import {ArrowLongLeftIcon} from 'react-native-heroicons/solid';

const ForgotPasswordScreen = () => {
  const navigation = useNavigation();

  return (
    <View className="p-5 flex-1 bg-white w-screen">
      <TouchableHighlight
        className="w-12 p-2 rounded-full bg-white"
        underlayColor="white"
        onPress={() => navigation.goBack()}>
        <ArrowLongLeftIcon size={30} color="#714DD8" />
      </TouchableHighlight>

      <View className="Items-center">
        <Text className="text-black mt-3 font-bold text-center text-[24px] leading-[28.8px]">
          Forgot Password
        </Text>
      </View>
      <View className="items-center">
        <Text className="text-black text-center mt-3 text-[18px] leading-[26px]">
          Enter the email registered with your account and we'll send an email
          with instructions to reset your password.
        </Text>
      </View>
      <View className="Items-start justify-start flex w-full">
        <View className="mt-6 space-y-5">
          <TextInput
            className="border w-full bg-white"
            placeholder="Enter your email address"
            left={<TextInput.Icon icon="email" color="#707070" />}
          />
        </View>
      </View>
      <View>
        <Button
          buttonColor="#714DD9"
          textColor="white"
          className="mt-4 rounded-sm w-full h-[48px] rounded-md justify-center flex"
          onPress={() => navigation.navigate('Login')}>
          <Text className="text-white text-[14px]">Continue</Text>
        </Button>
      </View>
      <View className="my-8 flex-row space-x-1 items-center w-screen">
        <Text className="text-[#707070]">Don't have an account?</Text>
        <Text
          className="text-primary underline-offset-2 underline font-semibold"
          onPress={() => navigation.navigate('Register')}>
          Sign up
        </Text>
      </View>
      
    </View>
  );
};

export default ForgotPasswordScreen;
