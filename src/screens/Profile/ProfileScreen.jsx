/* eslint-disable import/namespace */
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState, useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  ScrollView,
  Alert,
  TouchableHighlight,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Button } from '../../components/Button';
import { LinedButton } from '../../components/LinedButton';

import { AuthContext } from '../../context/userContext';
import { colors } from '../../utils/colors';

const MyProfile = ({ navigation }) => {
  // const [isModal, setIsModal] = useState(false);
  // const [modalOption, setModalOption] = useState('');
  // const [modalMsg, setModalMsg] = useState('');
  // const [modalNeg, setModalNegBotton] = useState('');
  // const [modalPos, setModalPosBotton] = useState('');

  const { userInfo, logout } = useContext(AuthContext);

  const navigate = useNavigation();

  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    navigate.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView>
      <Modal
        animationType="slide"
        transparent={true}
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
                Logout
              </Text>
            </View>
            <Text style={{ fontWeight: '400', fontSize: 14, paddingLeft: 20 }}>
              Are you sure you want log out of your ticked {'\n'}account?
            </Text>
            <View style={{}}>
              <Button
                onPress={logout}
                style={{ fontSize: 14, marginBottom: 5, marginTop: 20, width: 250 }}
                title="Logout"
              />
              <LinedButton
                onPress={() => navigate.goBack()}
                style={{ fontSize: 14, width: 250 }}
                title="Cancel"
              />
            </View>
          </View>
        </View>
      </Modal>

      <View style={[style.container]}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TouchableHighlight onPress={() => navigate.goBack()}>
            <MaterialIcons name="arrow-back" size={23} color={colors.primary} />
          </TouchableHighlight>
          {/* <Text style={{ fontSize: 20, fontWeight: 'bold', paddingHorizontal: 20 }}>Profile</Text> */}
        </View>
        <ScrollView>
          {/* Upper section */}
          <View style={style.upperProfile}>
            <View style={style.profileCap}>
              <Text style={{ color: '#707070', fontSize: 50 }}>
                {userInfo.first_name.charAt(0)}
              </Text>
            </View>
            <Text style={{ fontSize: 18, color: '#333333', marginBottom: 10, fontWeight: 'bold' }}>
              {userInfo.first_name} {userInfo.last_name}
            </Text>
            <Text style={{ fontWeight: '400', fontSize: 14, color: '#333333', marginBottom: 20 }}>
              Ticked Free Plan
            </Text>

            <TouchableOpacity style={style.smallButton}>
              <Text style={{ color: '#ffffff', fontWeight: '600', fontSize: 14 }}>
                Upgrade Plan
              </Text>
            </TouchableOpacity>
          </View>

          {/* Personal Information */}
          <View style={style.personalInfo}>
            <Text
              style={{
                //
                fontSize: 18,
                fontWeight: '700',
                color: '#333333',
              }}>
              Personal Information
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('EditProfileComponent')}>
              <Text
                style={{
                  //
                  fontSize: 14,
                  fontWeight: '600',
                  color: colors.primary,
                }}>
                Edit
              </Text>
            </TouchableOpacity>
          </View>

          <View style={style.personalInfoDetails}>
            <View style={[style.personalInfo, { marginBottom: 10 }]}>
              <Text style={style.nameStyle}>Name</Text>
              <Text style={style.valueStyle}>
                {userInfo.first_name} {userInfo.last_name}
              </Text>
            </View>

            <View style={[style.personalInfo, { marginBottom: 10 }]}>
              <Text style={style.nameStyle}>Email address</Text>
              <Text style={style.valueStyle}>{userInfo.email}</Text>
            </View>

            <View style={[style.personalInfo, { marginBottom: 10 }]}>
              <Text style={style.nameStyle}>Phone </Text>
              <Text style={style.valueStyle}>{userInfo.phone}</Text>
            </View>
          </View>

          {/* modal dialog */}

          {/* <Modal
        transparent
        animationType="fade"
        visible={isModal}
        onRequestClose={() => CloseModal(false)}>
        <ModalPop
          modalMsg={modalMsg}
          modalNeg={modalNeg}
          modalPos={modalPos}
          modalOption={modalOption}
          setIsModal={CloseModal}
        />
      </Modal> */}

          {/* Security section */}

          <Text
            style={{
              //
              fontSize: 18,
              fontWeight: '700',
              color: '#333333',
              marginBottom: 8,
              marginTop: 24,
            }}>
            Security
          </Text>
          <View style={style.personalInfoDetails}>
            <View style={{ height: 130, width: '100%' }}>
              <TouchableOpacity>
                <View style={style.personalInfo}>
                  <Text>Change Password</Text>

                  <MaterialIcons name="keyboard-arrow-right" size={30} color={'#714dd9'} />
                </View>
              </TouchableOpacity>

              <TouchableOpacity>
                <View style={style.personalInfo}>
                  <Text>Manage Devices</Text>
                  <MaterialIcons name="keyboard-arrow-right" size={30} color={'#714dd9'} />
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigate.navigate('Settings')}>
                <View style={style.personalInfo}>
                  <Text>Settings</Text>
                  <MaterialIcons name="keyboard-arrow-right" size={30} color={'#714dd9'} />
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={style.personalInfo}>
                  <Text>Manage Devices</Text>
                  <MaterialIcons name="keyboard-arrow-right" size={30} color={'#714dd9'} />
                </View>
              </TouchableOpacity>
            </View>
          </View>

          {/* Logout section */}
          <View style={style.personalInfoDetails}>
            <TouchableOpacity
              onPress={() => {
                setModalVisible(!modalVisible);
                {
                  logout;
                }
              }}>
              <View style={style.personalInfo}>
                <Text style={style.actionLink}>Logout</Text>
                <MaterialIcons name="keyboard-arrow-right" size={30} color={'#714dd9'} />
              </View>
            </TouchableOpacity>
          </View>
          <View style={style.personalInfoDetails}>
            <TouchableOpacity onPress={() => navigation.navigate('DeleteProfile')}>
              <View style={style.personalInfo}>
                <Text style={style.actionLink}>Delete account</Text>
                <MaterialIcons name="keyboard-arrow-right" size={30} color={'#714dd9'} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigate.navigate("Settings")}>
              <View style={style.personalInfo}>
                <Text>Settings</Text>
                <MaterialIcons name="keyboard-arrow-right" size={30} color={'#714dd9'} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={style.personalInfo}>
                <Text>Manage Devices</Text>
                <MaterialIcons name="keyboard-arrow-right" size={30} color={'#714dd9'} />
              </View>
            </TouchableOpacity>
          </View>

          {/* Delete Account section */}
          {/* <View style={style.personalInfoDetails}>
        <TouchableOpacity onPress={() => DeleteAccount(true)}>
          <View style={style.personalInfo}>
            <Text style={style.actionLink}>Delete account</Text>
            <MaterialIcons name="keyboard-arrow-right" size={30} />
          </View>
        </TouchableOpacity>
      </View> */}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default MyProfile;

const style = StyleSheet.create({
  container: {
    height: '100%',
    padding: 20,
    backgroundColor: '#f9f7ff',
  },
  upperProfile: {
    marginTop: 20,
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
  personalInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 10,
    marginBottom: 5,
    marginTop: 5,
    alignItems: 'center',
  },
  personalInfoDetails: {
    padding: 15,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    marginVertical: 8,
  },
  smallButton: {
    width: 120,
    height: 48,
    borderRadius: 8,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nameStyle: {
    color: '#707070',
    fontSize: 14,
    fontWeight: '400',
    //
  },
  valueStyle: {
    color: '#333333',
    fontSize: 14,
    fontWeight: '700',
  },
  actionLink: {
    //
    fontWeight: '600',
    fontSize: 14,
    color: '#db0004',
  },
});
