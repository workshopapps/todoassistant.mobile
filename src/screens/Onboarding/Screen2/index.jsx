import { View, Text, Image, StatusBar, TouchableOpacity } from 'react-native';
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
    <View style={styles.viewOne}>
      <View style={styles.viewTwo}>
      <TouchableOpacity  onPress={() => navigation.navigate('Auth')} >
        <Text style={styles.textOne}> Skip</Text></TouchableOpacity>
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
        <Text
          style={{
            fontSize: 14,
            paddingBottom: 5,
            paddingHorizontal: 40,
            alignItems: 'center',
            width: '100%',
            justifyContent: 'center',
            display: 'flex',
            marginBottom: 20
          }}>
          Your to-do-list are automatically sorted into categories with a daily reminder to keep you
          in check.
        </Text>

        <Button onPress={() => navigation.navigate('Auth')} style={{ fontSize: 14 }} title="Next" />
      </View>
    </View>
  );
};

export default Screen2;
