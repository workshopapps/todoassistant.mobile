/* eslint-disable import/namespace */
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from '../../../components/Button';
import { Input } from '../../../components/Input/index';
import { colors } from '../../../utils/colors';
import arrowLeft from '../../../assets/arrowLeft.png';

const ProfileLayoutComponent = () => {
  const navigation = useNavigation();

  return (
    <View
    style={{
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      height: '100%',
      backgroundColor: '#f9f7ff',
      paddingTop: 60,
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
      <Text style={{fontSize: 22, fontWeight: "700", paddingLeft: 20}}>Edit profile</Text>
    <View style={style.container}>
      {/* Upper section */}
      <View style={style.upperProfile}>
        <View style={style.profileCap}>
          <Text style={{ color: '#707070', fontSize: 50 }}>J</Text>
        </View>

        {/* form section */}

        <Input label="Full name" placeholder="Full Name" value="Joseph Anderson" style={{color: "#707070"}} />

        <Input
          label="Email Address"
          placeholder="example@gmail.com"
          value="Josephanderson@gmail.com"
          style={{color: "#707070"}}
        />

        <Input label="Phone Number" placeholder="081 234 5678" value="081 234 5678"  style={{color: "#707070"}}/>
      </View>

      <Button title="Save Changes" />
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
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  profileCap: {
    width: 100,
    height: 100,
    borderRadius: 100,
    marginBottom: 20,
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
  },
});
