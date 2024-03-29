import {View, Text} from 'react-native';
import React, {useState} from 'react';

import Ticked from '../../assets/icons/ticked.svg';
import Google from '../../assets/icons/google-icon.svg';

import {Button, Checkbox, TextInput} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const RegisterScreen = () => {
  const [checked, setChecked] = useState();

  const navigation = useNavigation();

  return (
    <View className="p-5 flex-1 bg-white w-screen">
      <View className="items-center">
        <Ticked width={32} height={28} fill="black" />
        <Text className="text-black mt-3 font-bold text-[24px] leading-[28.8px]">
          Create Account
        </Text>
        <View className="items-start justify-start flex w-full">
          <View className="mt-6 space-y-5">
            <TextInput
              className="border w-80 bg-white h-[46px] rounded-md text-sm"
              placeholder="First Name"
              mode="flat"
              left={<TextInput.Icon icon="account-circle" color="#707070" />}
            />
            <TextInput
              className="border w-80 bg-white h-[46px] rounded-md text-sm"
              placeholder="Last Name"
              mode="flat"
              left={<TextInput.Icon icon="account-circle" color="#707070" />}
            />
            <TextInput
              className="border w-80 bg-white h-[46px] rounded-md text-sm"
              placeholder="Enter your email address"
              mode="flat"
              left={<TextInput.Icon icon="email" color="#707070" />}
            />
            <TextInput
              className="border w-80 bg-white h-[46px] rounded-md text-sm"
              placeholder="+254 ***"
              mode="flat"
              left={<TextInput.Icon icon="phone" color="#707070" />}
            />
            <TextInput
              className="border w-80 bg-white h-[46px] rounded-md text-sm"
              placeholder="Password"
              mode="flat"
              left={<TextInput.Icon icon="shield-lock" color="#707070" />}
            />

            <View className="flex-row items-center">
              <Checkbox
                status={checked ? 'checked' : 'unchecked'}
                onPress={() => {
                  setChecked(!checked);
                }}
              />
              <Text className="text-[14px] w-5/6 text-[#707070]">
                By signing up, I agree to the Terms of Service and Privacy
                Policy
              </Text>
            </View>

            <Button
              buttonColor="#714DD9"
              textColor="white"
              className="mt-5 rounded-sm">
              Sign Up
            </Button>
            <Text className="text-black my-5 text-center w-full">
              or continue with
            </Text>

            <View className="flex-row w-full mt-5 space-x-2">
              <TouchableOpacity className="w-1/2 border-[#D3D0D9] border rounded-[4px] flex-row items-center justify-center p-2 space-x-2">
                <Google width={24} height={24} />
                <Text className="text-black font-semibold">Google</Text>
              </TouchableOpacity>
              <TouchableOpacity className="w-1/2 border-transparent bg-[#2567B3] border rounded-[4px] flex-row items-center justify-center space-x-2">
                <Icon name="facebook" size={24} color="white" />
                <Text className="text-white font-semibold ml-1">Facebook</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View className="my-8 flex-row space-x-1">
            <Text className="text-[#707070]">Already have an account?</Text>
            <Text
              className="text-primary underline-offset-2 underline font-semibold"
              onPress={() => navigation.navigate('Login')}>
              Login
            </Text>
          </View>
        </View>
      </View>
      <Text>RegisterScreen</Text>
    </View>
  );
};

export default RegisterScreen;
