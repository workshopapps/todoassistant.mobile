import {View, Text, TouchableHighlight} from 'react-native';
import React from 'react';
import {ArrowLongLeftIcon} from 'react-native-heroicons/solid';

import {useNavigation} from '@react-navigation/native';
import {useAuthUser} from '../../hooks/useAuthUser';

const UserDetails = () => {
  const navigation = useNavigation();

  const user = useAuthUser();

  return (
    <View className="px-3 py-2">
      <View className="flex-row items-center space-x-1">
        <TouchableHighlight
          className=" p-2 rounded-full"
          underlayColor="white"
          onPress={() => navigation.goBack()}>
          <ArrowLongLeftIcon size={24} color="#714DD8" />
        </TouchableHighlight>
        <Text className="text-primary font-semibold text-[14px]">Back</Text>
      </View>
      <Text className="text-black">{user?.email}</Text>
    </View>
  );
};

export default UserDetails;
