import { View, Text, Image } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import styles from './index.styles';
import { useDispatch, useSelector } from 'react-redux';
import home2 from '../../../assets/home2.png';
import { Button } from '../../../components/Button';

const Screen2 = () => {
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
        }}>
        <Text style={{ color: '#714DD9', fontSize: 14 }}> Skip</Text>
      </View>
      <Image
        source={home2}
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
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            alignItems: 'center',
            justifyContent: 'center',
            paddingBottom: 8,
          }}>
          Create Customized task flows
        </Text>
        <Text style={{ fontSize: 14, paddingBottom: 5 }}>
          Your to-do-list are automatically sorted into
        </Text>
        <Text style={{ fontSize: 14, paddingBottom: 5 }}>
          categories with a daily reminder to keep you in check
        </Text>
        <Text style={{ fontSize: 14, paddingBottom: 30 }}>check.</Text>
        <Button onPress={() => navigation.navigate('Auth')} style={{ fontSize: 14 }} title="Next" />
      </View>
    </View>
  );
};

export default Screen2;
