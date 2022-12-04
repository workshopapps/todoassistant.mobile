/* eslint-disable import/namespace */
import { useNavigation } from '@react-navigation/native';
import Checkbox from 'expo-checkbox';
import React, { useState, useLayoutEffect, useContext } from 'react';
import { View, Text, Image, TextInput } from 'react-native';

import fb from '../../assets/fb.png';
import google from '../../assets/google.png';
import logo1 from '../../assets/logo1.png';
import { Button } from '../../components/Button';
import { AuthContext } from '../../context/userContext';
import styles from './index.styles';

const Login = () => {
  const [isChecked, setChecked] = useState(false);
  const navigation = useNavigation();
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  useLayoutEffect(() => {
    navigation.setOptions({
      // headerShown: false,
    });
  }, []);

  const { login } = useContext(AuthContext);

  const handleSubmit = () => {
    console.log('submitted');

  }

  return (
    <View
      style={{
        height: '100%',
        width: '100%',
        flexDirection: 'column',
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: '#ffffff',
      }}>
      <Text
        style={{
          color: '#000000',
          fontSize: 18,
          fontWeight: 'bold',
          textAlign: 'center',
          paddingTop: 30,
          paddingBottom: 30,
        }}>
        Login
      </Text>
      <Text
        style={{
          color: '#000000',
          fontSize: 14,

          textAlign: 'left',
          paddingTop: 30,
          paddingBottom: 5,
        }}>
        Email Address
      </Text>
      <TextInput
        placeholder="john.doe@gmail.com"
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
        style={{
          border: 2,
          borderRadius: 8,
          borderWidth: 1,
          height: 48,
          width: '100%',
          justifyContent: 'center',
          borderColor: '#030303',
          backgroundColor: '#F6FAFB',
          paddingLeft: 10,
        }}
      />
      <Text
        style={{
          color: '#000000',
          fontSize: 14,
          textAlign: 'left',
          paddingTop: 30,
          paddingBottom: 5,
        }}>
        Password
      </Text>
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
        style={{
          border: 2,
          borderRadius: 8,
          borderWidth: 1,
          height: 48,
          width: '100%',
          justifyContent: 'center',
          borderColor: '#030303',
          backgroundColor: '#F6FAFB',
          paddingLeft: 10,
        }}
      />

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 10,
          marginBottom: 30,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Checkbox
            style={styles.checkbox}
            value={isChecked}
            onValueChange={setChecked}
            color={isChecked ? '#4630EB' : undefined}
          />
          <Text style={styles.stylew}>Remember me </Text>
        </View>
        <Text style={styles.stylesss} onPress={() => navigation.navigate('ResetPassword')}>Forgot Password ?</Text>
      </View>
      <View
        style={{
          alignItems: 'center',
          paddingTop: 20,
          paddingLeft: 20,
          paddingRight: 20,
          paddingBottom: 30,
          flexDirection: 'column',
        }}>
        <Button onPress={()=>login(email, password)} style={{ fontSize: 14 }} title="Sign In" />
      </View>
      <View style={styles.stylings}>
        <View style={styles.styling1} />
        <Text style={styles.styling2}>Or continue with</Text>
        <View style={styles.styling3} />
      </View>
      <View style={styles.styling4}>
        <Image source={google} style={styles.styless} />
        <Image source={fb} style={styles.styless} />
      </View>
      <View style={styles.stylez}>
        <Text style={styles.stylezzz}>Don't have an account?</Text>
        <Text style={styles.stylesss} onPress={() => navigation.navigate('Registration')}>
          
          Sign Up
        </Text>
      </View>
    </View>
  );
};

export default Login;
