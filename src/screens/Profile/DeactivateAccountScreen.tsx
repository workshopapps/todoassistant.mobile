import {View, Text, TouchableHighlight} from 'react-native';
import React from 'react';
import {ArrowLongLeftIcon} from 'react-native-heroicons/solid';
import {
  NavigationContainer,
  useNavigation,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {Button, TextInput} from 'react-native-paper';

const DeactivateAccountScreen = () => {
  const navigation = useNavigation();

  return (
    <View className="p-8 flex-1 bg-white w-screen ">
      <TouchableHighlight
        className="w-12 p-2 rounded-full bg-white"
        underlayColor="white"
        onPress={() => navigation.goBack()}>
        <ArrowLongLeftIcon size={30} color="#714DD8" />
      </TouchableHighlight>

      <View>
        <Text className="text-black size-[24px] mt-5 font-bold">
          Deleting your account can't be undone and will cause the following
          action to take place:{' '}
        </Text>
        <View>
          <Text className="text-black size-[24px] mt-5">
            . Your account and data will be permanently erased across all
            devices and can't be recovered
          </Text>
          <View className="mt-5">
            <Text className="text-black size-[24px]">
              {' '}
              . Your will lose all progress attached to your account.
            </Text>
            <View className="mt-5">
              <Text className="text-black size-[24px]">
                {' '}
                . Your billing will stop at the end of current period.
              </Text>
              <View className="items-center justify-center mt-5 h-[38px] w-[160px]">
                <Button
                  buttonColor="#FF4D4F"
                  textColor="white"
                  className="mt-4 w-full h-[48px] rounded-md justify-center flex"
                  onPress={() => navigation.navigate('Logout')}>
                  <Text className="text-white text-[14px]">
                    Deactivate Account
                  </Text>
                </Button>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DeactivateAccountScreen;
