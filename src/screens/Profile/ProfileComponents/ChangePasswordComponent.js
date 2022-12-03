import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { colors } from '../../../utils/colors';
import { Input } from '../../../components/Input/index';
import { Button } from '../../../components/Button';
import arrowLeft from '../../../assets/arrowLeft.png';
import { useNavigation } from '@react-navigation/native';

const ProfileLayoutComponent = () => {
  const navigation = useNavigation();

  return (
    <View style={style.container}>
      <View
    style={{
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      height: '100%',
      backgroundColor: '#f9f7ff',
      paddingTop: 10,
      paddingBottom: 20,
    }}>
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        backgroundColor: '#f9f7ff',
        height: 30,
      }}/>
     
      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <Image source={arrowLeft} style={{ width: 24, height: 24, margin: 15 }} />
      </TouchableOpacity>
      <Text style={{fontSize: 22, fontWeight: "700", paddingLeft: 20}}>Change password</Text>
      {/* Upper section */}
      <View style={style.upperProfile}>
        {/* form section */}

        <Input label="Enter current Password "  isPassword={true} style={{color: "#707070"}} />

        <Input label="Enter new password"  isPassword={true} style={{color: "#707070"}}/>

        <Input label="Confirm new password" isPassword={true} style={{color: "#707070"}} />
      </View>

      <Button title={'Save Changes'} />

      
    </View>
    </View>
  );
};

export default ProfileLayoutComponent;

const style = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: "#f9f7ff",
    padding: 20,
  },
  upperProfile: {
    marginTop: 80,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
});
