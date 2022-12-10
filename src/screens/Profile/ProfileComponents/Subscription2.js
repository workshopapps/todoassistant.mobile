import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

import arrows from '../../../assets/arrows.png';
import { Button } from '../../../components/Button';

const Subscription2 = () => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        backgroundColor: '#f9f7ff',
        paddingTop: 30,
        paddingBottom: 20,
        paddingLeft: 20,
      }}>
      <Text
        style={{
          fontSize: 16,
          fontWeight: '400',
          paddingTop: 20,
          paddingLeft: 20,
          paddingBottom: 24,
          color: '#707070',
        }}>
        Subscribe to the plan of your choice.
      </Text>
      <View style={{ display: 'flex', flexDirection: 'column' }}>
        <View
          style={{
            height: 260,
            width: 335,
            backgroundColor: '#F4F3FC',
            borderRadius: 8,
            marginBottom: 10,
            alignItems: 'center',
          }}>
          <Text style={{ fontSize: 22, fontWeight: '700', color: '#714DD9', paddingTop: 10 }}>
            Basic
          </Text>
          <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ fontWeight: '600', fontSize: 39, color: '#333333', paddingRight: 10 }}>
              Free /
            </Text>
            <Text style={{ fontSize: 16, fontWeight: '400' }}>7 days</Text>
          </View>
          <View
            style={{ height: 1, width: '80%', backgroundColor: '#714DD9', marginTop: 18 }}></View>
          <Text style={{ color: '#333333', fontSize: 16, fontWeight: '400', paddingTop: 10 }}>
            Ad free experience
          </Text>
          <Text style={{ color: '#333333', fontSize: 16, fontWeight: '400' }}>
            Access to a virtual assistant
          </Text>
          <Text style={{ color: '#333333', fontSize: 16, fontWeight: '400', paddingBottom: 10 }}>
            Personalised recommendations
          </Text>
          <Button
            onPress={() => navigation.navigate('Payment')}
            style={{ fontSize: 14 }}
            title="Get 1 month for free"
          />
        </View>

        <View
          style={{
            height: 260,
            width: 335,
            backgroundColor: '#F4F3FC',
            borderRadius: 8,
            marginBottom: 10,
            alignItems: 'center',
          }}>
          <Text style={{ fontSize: 22, fontWeight: '700', color: '#714DD9', paddingTop: 10 }}>
            Standard
          </Text>
          <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ fontWeight: '600', fontSize: 39, color: '#333333', paddingRight: 10 }}>
              $ 12.00 /
            </Text>
            <Text style={{ fontSize: 16, fontWeight: '400' }}> 12 months</Text>
          </View>
          <View
            style={{ height: 1, width: '80%', backgroundColor: '#714DD9', marginTop: 18 }}></View>
          <Text style={{ color: '#333333', fontSize: 16, fontWeight: '400', paddingTop: 10 }}>
            Ad free experience
          </Text>
          <Text style={{ color: '#333333', fontSize: 16, fontWeight: '400' }}>
            Access to a virtual assistant
          </Text>
          <Text style={{ color: '#333333', fontSize: 16, fontWeight: '400', paddingBottom: 10 }}>
            Personalised recommendations
          </Text>
          <View
            onPress={() => navigation.navigate('Payment')}
            style={{
              fontSize: 14,
              height: 53,
              width: 290,
              borderColor: '#714DD9',
              borderWidth: 1,
              borderRadius: 8,
              alignItems: 'center',
            }}>
            <Text style={{ fontSize: 14, paddingTop: 15 }}>Get 12 months / $ 6.00</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Subscription2;

const styles = StyleSheet.create({});
