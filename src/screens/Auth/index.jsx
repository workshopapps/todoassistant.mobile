import { useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect } from 'react';
import { View, Image } from 'react-native';

import authframe from '../../assets/authframe.png';
import { Button } from '../../components/Button';
import { LinedButton } from '../../components/LinedButton';

const Auth = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: 60,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: '#ffffff',
      }}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-end',
          paddingRight: 20,
        }}
      />
      <Image
        source={authframe}
        style={{
          flex: 3,
          width: '100%',
        }}
      />
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          paddingTop: 20,
          display: 'flex',
          flexDirection: 'column',
        }}>
        <Button
          onPress={() => navigation.navigate('Registration')}
          style={{ fontSize: 14, marginBottom: 20 }}
          title="Sign Up"
        />

        <LinedButton
          onPress={() => navigation.navigate('Login')}
          style={{ fontSize: 14 }}
          title="Sign In"
        />
      </View>
    </View>
  );
};

export default Auth;
