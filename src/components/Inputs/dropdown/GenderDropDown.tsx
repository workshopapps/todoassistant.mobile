import {View, Text} from 'react-native';
import React, {useState} from 'react';

import {Dropdown} from 'react-native-paper';

const GenderDropDown = () => {
  const [gender, setGender] = useState('male');

  return (
    <View className="w-full">
      <Dropdown
        label="Gender"
        value={gender}
        onValueChange={value => setGender(value)}
        className="bg-[#F9F7FF] border-primary my-2 rouned-md">
        <Dropdown.Item label="Male" value="male" />
        <Dropdown.Item label="Female" value="female" />
      </Dropdown>
    </View>
  );
};

export default GenderDropDown;
