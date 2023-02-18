/* eslint-disable prettier/prettier */
import {View, Text, ScrollView} from 'react-native';
import React from 'react';

const UnreadNotifications = () => {
  return (
    <ScrollView className="flex-1 bg-white px-5 py-3">
      <View className="flex-1 items-center justify-center w-full text-center">
        <Text className="text-black font-bold text-[16px]">
          No Notifications
        </Text>
        <Text className="text-[#707070] text-center text-[12px] w-44">
          You don’t have a notification yet! Check back again.
        </Text>
      </View>
    </ScrollView>
  );
};

export default UnreadNotifications;
