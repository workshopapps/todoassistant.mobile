import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import arrowLeft from '../../../assets/arrowLeft.png';
import { useNavigation } from '@react-navigation/native';

const DeleteProfile = () => {
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
          height: 60,
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Image source={arrowLeft} style={{ width: 24, height: 24, margin: 15 }} />
        </TouchableOpacity>
      </View>
      <Text style={{ paddingLeft: 20, fontSize: 22, fontWeight: '700', paddingBottom: 20 }}>
        Delete account
      </Text>
      <Text style={{ paddingLeft: 20, fontSize: 14, fontWeight: '400', paddingBottom: 30 }}>
        Deleting your account cannot be undone and will {'\n'} cause the following action to take
        place:
      </Text>
      <View style={{ display: 'flex', flexDirection: 'row' }}>
        <View
          style={{
            height: 4,
            width: 4,
            borderRadius: 4,
            backgroundColor: '#707070',
            marginLeft: 20,
          }}></View>
        <Text
          style={{
            paddingLeft: 10,
            color: '#707070',
            paddingBottom: 20,
            fontSize: 14,
            fontWeight: '400',
          }}>
          Your account and data will be permanently {'\n'}erased across all devices and can’t be{' '}
          {'\n'} recovered.{' '}
        </Text>
      </View>
      <View style={{ display: 'flex', flexDirection: 'row' }}>
        <View
          style={{
            height: 4,
            width: 4,
            borderRadius: 4,
            backgroundColor: '#707070',
            marginLeft: 20,
          }}></View>
        <Text
          style={{
            paddingLeft: 10,
            color: '#707070',
            paddingBottom: 20,
            fontSize: 14,
            fontWeight: '400',
          }}>
          Your will lose all progress attached to your {'\n'} account.
        </Text>
      </View>
      <View style={{ display: 'flex', flexDirection: 'row' }}>
        <View
          style={{
            height: 4,
            width: 4,
            borderRadius: 4,
            backgroundColor: '#707070',
            marginLeft: 20,
          }}></View>
        <Text
          style={{
            paddingLeft: 10,
            color: '#707070',
            paddingBottom: 60,
            fontSize: 14,
            fontWeight: '400',
          }}>
          Your billing will stop at the end of current {'\n'} period.
        </Text>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'coloumn',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <TouchableOpacity
          style={{
            width: 120,
            height: 48,
            borderRadius: 8,
            backgroundColor: '#DB0004',
            alignItems: 'center',
            marginBottom: 30,
            justifyContent: 'center',
          }}>
          <Text style={{ color: '#ffffff', fontWeight: '600', fontSize: 14 }}> Delete account</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={{ color: '#0000000', fontWeight: '600', fontSize: 14 }}> Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DeleteProfile;

const styles = StyleSheet.create({});
