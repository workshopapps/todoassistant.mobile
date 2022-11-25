/* eslint-disable import/namespace */
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Button } from '../../../components/Button';
import { Input } from '../../../components/Input/index';
import { colors } from '../../../utils/colors';

const ProfileLayoutComponent = () => {
  return (
    <View style={style.container}>
      {/* Upper section */}
      <View style={style.upperProfile}>
        <View style={style.profileCap}>
          <Text style={{ color: '#707070', fontSize: 50 }}>J</Text>
        </View>

        {/* form section */}

        <Input label="Full name" placeholder="Full Name" value="Joseph Anderson" />

        <Input
          label="Email Address"
          placeholder="example@gmail.com"
          value="Josephanderson@gmail.com"
        />

        <Input label="Phone Number" placeholder="081 234 5678" value="081 234 5678" />
      </View>

      <Button title="Save Changes" />
    </View>
  );
};

export default ProfileLayoutComponent;

const style = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: colors.backgroundColor,
    padding: 20,
  },
  upperProfile: {
    marginTop: 70,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  profileCap: {
    width: 80,
    height: 80,
    borderRadius: 100,
    backgroundColor: colors.profileCircle,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
