/* eslint-disable import/namespace */
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import React, { useEffect, useState, useContext } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

import arrowLeft from '../../../assets/arrowLeft.png';
import { Button } from '../../../components/Button';
import { Input } from '../../../components/Input/index';
// import { AuthContext } from '../../../context/authContext';

const ProfileLayoutComponent = () => {
  const navigation = useNavigation();

  // const { userInfo } = useContext(AuthContext);

  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [phone_number, setPhoneNumber] = useState('');

  const baseURL = 'https://api.ticked.hng.tech/api/v1/user';
  useEffect(() => {
    init();
  }, []);

  const init = () => {
    // setFirstName(userInfo.first_name);
    // setLastName(userInfo.last_name);
    // setPhoneNumber(userInfo.phone);
  };

  const clickUpdate = () => {
    updateFunction().then((_) => {
      navigation.navigate('Profile')
    });
  };

  const updateFunction = async () => {
    axios
      .put(
        // `${baseURL}/${userInfo.user_id}`,
        {
          first_name,
          last_name,
          phone: phone_number,
          email: userInfo.email,
          gender: userInfo.gender,
          date_of_birth: '',
        },
        {
          headers: {
            // Authorization: `Bearer ${userInfo.access_token}`,
          },
        }
      )
      .then(async (response) => {
        // userInfo.email = response.data.email;
        // userInfo.phone = response.data.phone;
        // userInfo.first_name = response.data.first_name;
        // userInfo.last_name = response.data.last_name;
        // userInfo.date_of_birth = '';
        // userInfo.gender = response.data.gender;

        // AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));

        init();

        alert('Successfully Updated');
      })
      .catch((err) => console.log(err.response.data));
  };

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
        }}
      />

      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <Image source={arrowLeft} style={{ width: 24, height: 24, margin: 15 }} />
      </TouchableOpacity>
      <Text style={{ fontSize: 22, fontWeight: '700', paddingLeft: 20 }}>Edit profile</Text>
      <View style={style.container}>
        {/* Upper section */}
        <View style={style.upperProfile}>
          <View style={style.profileCap}>
            <Text style={{ color: '#707070', fontSize: 50 }}>{first_name[0]}</Text>
          </View>

          {/* form section */}

          <Input
            label="First name"
            placeholder="First Name"
            value={first_name}
            onChangeText={(v) => setFirstName(v)}
            style={{ color: '#707070' }}
          />

          <Input
            label="Last Name"
            placeholder="Last Name"
            value={last_name}
            onChangeText={(v) => setLastName(v)}
            style={{ color: '#707070' }}
          />

          <Input
            label="Phone Number"
            placeholder="081 234 5678"
            value={phone_number}
            onChangeText={(v) => setPhoneNumber(v)}
            style={{ color: '#707070' }}
          />
        </View>

        <Button onPress={clickUpdate} title="Save Changes" />
      </View>
    </View>
  );
};

export default ProfileLayoutComponent;

const style = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#f9f7ff',
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
