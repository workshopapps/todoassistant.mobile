import { View, Text, Image } from 'react-native';
import React, { useLayoutEffect } from 'react';
// import { Button } from "../../components";
import home1 from '../../assets/home1.png';
import { Button } from '../../components/Button';
import { useNavigation } from '@react-navigation/native';

const OnboardingScreen1 = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View>
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
          source={home1}
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
            Managing your task the easy way
          </Text>
          <Text style={{ fontSize: 14, paddingBottom: 5 }}>
            {' '}
            The most useful to-do-list app that breaks tasks
          </Text>
          <Text style={{ fontSize: 14, paddingBottom: 30 }}> into small steps.</Text>
          <Button
            onPress={() => navigation.navigate('Onboarding2')}
            style={{ fontSize: 14 }}
            title="Next"
          />
        </View>
      </View>
    </View>
  );
};

export default OnboardingScreen1;
