import {View, Text, TouchableHighlight} from 'react-native';
import React from 'react-native';
import {TextInput} from 'react-native-paper';
import {ArrowLongLeftIcon} from 'react-native-heroicons/solid';
import {useNavigation} from '@react-navigation/native';
import {Button} from 'react-native-paper';

const ResetPasswordScreen = () => {
  const navigation = useNavigation();

  return (
    <View className="p-5 flex-1 bg-white w-screen">
      <TouchableHighlight
        className="w-12 p-2 rounded-full bg-white"
        underlayColor="white"
        onPress={() => navigation.goBack()}>
        <ArrowLongLeftIcon size={30} color="#714DD8" />
      </TouchableHighlight>
      <View className="items-center">
        <Text className="text-black mt-3 font-bold text-center text-[24px] leading-[28.8px]">
          Reset Password
        </Text>
        <View className="items-center">
          <Text className="text-black mt-3 text-center text-[18px] leading-[26px]">
            Your password should be atleast 9 characters of lower case and upper
            case
          </Text>
        </View>
        <View className="Items-start justify-start  w-full">
          <View items-start justify-start w-full>
            <View className="mt-6 space-y-5">
              <TextInput
                className="border w-full bg-white"
                placeholder="Enter your password"
                left={<TextInput.Icon icon="lock" color="#707070" />}
              />
              <TextInput
                className="border w-full bg-white"
                placeholder="Confirm new password"
                left={<TextInput.Icon icon="shield-check" color="#707070" />}
              />
            </View>
            <View>
              <Button
                buttonColor="#714DD9"
                textColor="white"
                className="mt-4 w-full h-[48px] rounded-md justify-center flex"
                onPress={() => navigation.navigate('Login')}>
                <Text className="text-white text-[14px]">Reset Password</Text>
              </Button>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ResetPasswordScreen;
