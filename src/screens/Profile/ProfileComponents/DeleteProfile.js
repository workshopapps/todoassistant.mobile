import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import React, { useState, useContext } from 'react';
import { AuthContext } from '../../../context/userContext';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
  Alert,
  TextInput,
} from 'react-native';

import arrowLeft from '../../../assets/arrowLeft.png';
import { Button } from '../../../components/Button';

const DeleteProfile = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  const { logout } = useContext(AuthContext);

  const baseURL = 'https://api.ticked.hng.tech/api/v1/user';

  const deleteUser = async () => {
    const user = JSON.parse(await AsyncStorage.getItem('userInfo'));
    axios
      .delete(`${baseURL}/${user.user_id}`, {
        headers: {
          Authorization: `Bearer ${await AsyncStorage.getItem('userToken')}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        setModalVisible(true);
        logout();
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
      <Modal
        animationType="slide"
        transparent
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              margin: 20,
              backgroundColor: 'white',
              borderRadius: 8,
              padding: 20,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 1,
              },
              shadowOpacity: 0.25,
              shadowRadius: 4,
              elevation: 2,
            }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-start',
              }}>
              <Text
                style={{
                  fontWeight: '700',
                  fontSize: 18,
                  paddingBottom: 10,
                  paddingLeft: 20,
                }}>
                Delete your account
              </Text>
            </View>
            <Text
              style={{
                fontWeight: '600',
                fontSize: 14,
                paddingLeft: 20,
                paddingBottom: 10,
                color: '#707070',
              }}>
              Enter password to confirm account {'\n'}deletion.
            </Text>
            <TextInput
              style={{
                height: 48,
                backgroundColor: '#ffffff',
                borderRadius: 8,
                borderWidth: 1,
                borderColor: '#d9d9d9',
                paddingLeft: 20,
                paddingRight: 20,
                marginLeft: 20,
                marginRight: 20,
              }}
              placeholder="password"
              color="D9D9D9"
            />
            <View style={{}}>
              <Button
                onPress={() => navigation.navigate('Profile')}
                style={{ fontSize: 14, marginBottom: 5, marginTop: 20, width: 250 }}
                title="Cancel"
              />
              <TouchableOpacity>
                <View
                  style={{
                    width: 250,
                    height: 48,
                    borderRadius: 8,
                    borderColor: '#DB0004',
                    borderWidth: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginLeft: 20,
                  }}>
                  <Text style={{ fontSize: 14, color: '#DB0004' }}>Delete Account</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
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
          }}
        />
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
          }}
        />
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
          }}
        />
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
          onPress={() => {
            deleteUser();
          }}
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
