import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import {MainLayout} from '../../components';
import {Button} from 'react-native-paper';

import Profile from '../../assets/bottom-tabs-icons/profile.jpg';
import {ChevronRightIcon} from 'react-native-heroicons/solid';
import {useNavigation} from '@react-navigation/native';

const ProfileScreen = () => {
  const navigation = useNavigation();

  const deactivateAcc = () => {
    navigation.navigate('DeactivateAccount');
  };

  const settingOptions = [
    {
      title: 'Personal Information',
      badge: 'completed',
      icon: true,
      onPress: () => {},
    },
    {
      title: 'Reminder',
      icon: true,
      onPress: () => {},
    },
    {
      title: 'Notifications',
      icon: true,
      onPress: () => {},
    },
    {
      title: 'Manage Passwords',
      icon: true,
      onPress: () => {},
    },
    {
      title: 'Deactivate Account',
      icon: true,
      route: 'DeactivateAccount',
      onPress: () => {
        deactivateAcc();
      },
    },
    {
      title: 'Support',
      icon: false,
      onPress: () => {},
    },
    {
      title: 'About Ticked App',
      icon: false,
      onPress: () => {},
    },
  ];

  return (
    <MainLayout>
      <View className="p-5 border-b border-[#E0E2E7] flex-row justify-between">
        <View>
          <Text className="text-[#707070] text-[12px]">Current Plan</Text>
          <Text className="text-[14px] font-semibold text-black">
            Ticked Free Plan
          </Text>
        </View>
        <Button
          buttonColor="#714DD9"
          textColor="white"
          className="rounded-md text-sm">
          Upgrade Plan
        </Button>
      </View>
      <View className="p-5 h-auto border-b border-[#E0E2E7] space-x-3 items-center flex-row">
        <View className="border-primary h-[72px] w-[72px] rounded-full border-4">
          <Image className="h-full w-full rounded-full" source={Profile} />
        </View>
        <View className="flex-1 space-y-2">
          <Text className="text-[#707070] text-[12px]">
            Personalize your account. Your profile will appear on all devices
            that use Ticked account.
          </Text>
          <Button
            className="border-primary border-2 rounded-lg w-[109px] bg-slate-100"
            buttonColor="white"
            textColor="#714DD9">
            Change Photo
          </Button>
        </View>
      </View>
      <ScrollView>
        {settingOptions.map((option, index) => (
          <View
            key={index}
            className="p-5 h-auto border-b border-[#E0E2E7] space-x-3 items-center flex-row">
            <View className="flex-1 space-y-2">
              <Text className="text-[#707070] text-[14px]">{option.title}</Text>
            </View>
            <View className="flex-row items-center space-x-4">
              {option.badge && (
                <Text className="text-xs font-semibold text-white bg-primary px-2 py-1 rounded-md">
                  {option.badge}
                </Text>
              )}

              {option.icon && (
                <TouchableOpacity onPress={() => option.onPress()}>
                  <ChevronRightIcon className="" size={20} color="#714DD8" />
                </TouchableOpacity>
              )}
            </View>
          </View>
        ))}
        <View className="items-center">
          <Button
            className="my-3 w-[211px] rounded-md"
            buttonColor="#FF4D4F"
            textColor="white">
            Logout
          </Button>
        </View>
      </ScrollView>
    </MainLayout>
  );
};

export default ProfileScreen;
