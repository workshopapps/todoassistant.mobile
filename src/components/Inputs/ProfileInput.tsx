import {View, Text} from 'react-native';
import React from 'react';

import {TextInput} from 'react-native-paper';

type ProfileInputProps = {
  label: string;
  type: string;
  value: string;
  placeholder: string;
  onChangeText: (text: string) => void;
};

const ProfileInput = ({
  label,
  type,
  value,
  onChangeText,
  placeholder,
}: ProfileInputProps) => {
  return (
    <View>
      <Text className="text-black font-semibold text-[12px] text-[#14161B]">
        {label}
      </Text>
      <TextInput
        value={value}
        className="h-[46px] bg-[#F9F7FF] border-primary my-2 rouned-md placeholder:text-[#667085]"
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={type === 'password'}
      />
    </View>
  );
};

export default ProfileInput;
