/* eslint-disable prettier/prettier */
import {View, Text, TouchableHighlight, TouchableOpacity, ScrollView, Image} from 'react-native';
import React from 'react';
import {ArrowLongLeftIcon, UserCircleIcon} from 'react-native-heroicons/solid';

import {useNavigation} from '@react-navigation/native';
import {useAuthUser} from '../../hooks/useAuthUser';
import ProfileInput from '../../components/Inputs/ProfileInput';
// import GenderDropDown from '../../components/Inputs/dropdown/GenderDropDown';
import {Button} from 'react-native-paper';

const UserDetails = () => {
  const navigation = useNavigation();

  const user = useAuthUser();

  return (
    <View className="px-3 py-2 bg-white flex-1">
      <View className="flex-row items-center space-x-1">
        <TouchableHighlight
          className=" p-2 rounded-full"
          underlayColor="white"
          onPress={() => navigation.goBack()}>
          <ArrowLongLeftIcon size={24} color="#714DD8" />
        </TouchableHighlight>
        <Text className="text-primary font-semibold text-[14px]">Back</Text>
      </View>
      <View>
        <View className="flex-row items-center space-x-1  border-b border-[#E0E2E7] py-2">
          <UserCircleIcon size={20} color="#714DD8" />
          <Text className="text-black font-bold">Profile</Text>
        </View>
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
      </View>
      <ScrollView className="space-y-4 flex my-5">
      <View className="p-5 h-auto border-b border-[#E0E2E7] space-x-3 items-center flex-row">
        <View className="border-primary h-[72px] w-[72px] rounded-full border-4">
          <Image
            className="h-full w-full rounded-full"
            source={{
              uri: user?.data.avatar,
            }}
          />
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
      
        <ProfileInput
          label="First Name"
          type="text"
          value={''}
          placeholder={user?.data?.first_name}
          // onChangeText={}
        />
        <ProfileInput
          label="Last Name"
          type="text"
          value={''}
          placeholder={user?.data?.last_name}
          // onChangeText={}
        />
        <ProfileInput
          label="Email"
          type="text"
          value={''}
          placeholder={user?.data?.email}
          // onChangeText={}
        />
        <ProfileInput
          label="Phone Number"
          type="text"
          value={''}
          placeholder={user?.data?.phone}
          // onChangeText={}
        />
        <ProfileInput
          label="Gender"
          placeholder={user?.data?.gender}
          type={''}
          value={''}
          // onChangeText={function (text: string): void {
          //   throw new Error('Function not implemented.');
          // }}
        />
        <ProfileInput
          label="Country"
          type="text"
          placeholder={user?.data?.country}
        />
        <ProfileInput
          label="Occupation"
          type="text"
          placeholder={user?.data?.occupation}
        />

        <View className="flex-row space-x-2 my-10">
          <TouchableOpacity className="border-primary rounded-md text-primary h-auto p-2 w-18 text-center border-2">
            <Text className="text-primary">cancel</Text>
          </TouchableOpacity>
          <Button
            className="rounded-md"
            textColor="white"
            buttonColor="#714DD8">
            Save Changes
          </Button>
        </View>
        {/* <GenderDropDown /> */}
      </ScrollView>
    </View>
  );
};

export default UserDetails;
