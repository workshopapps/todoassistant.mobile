import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { colors } from '../../../utils/colors';
import { Input } from '../../../components/Input/index';
import { Button } from '../../../components/Button';

const ProfileLayoutComponent = () => {
  return (
    <View style={style.container}>
      {/* Upper section */}
      <View style={style.upperProfile}>
        {/* form section */}

        <Input label="Enter current Password " placeholder={'P@$$W0rD'} isPassword={true} />

        <Input label="Enter new password" placeholder="New_P@$$W0rD" isPassword={true} />

        <Input label="Confirm new password" placeholder="New_P@$$W0rD" isPassword={true} />
      </View>

      <Button title={'Save Changes'} />

      <TouchableOpacity style={{ marginTop: 30 }}>
        <Text style={{ textAlign: 'center', fontSize: 14, fontWeight: '600', color: '#333333' }}>
          Forgot password
        </Text>
      </TouchableOpacity>
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
    marginTop: 80,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
});
