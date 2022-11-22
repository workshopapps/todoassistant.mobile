import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import React, { useState } from 'react';
import { colors } from '../../../utils/colors'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ModalPop from '../../../components/Modal/ModalPop';

const ProfileLayoutComponent = () => {
  const [isModal, setIsModal] = useState(false);
  const [modalOption, setModalOption] = useState('');
  const [modalMsg, setModalMsg] = useState('');
  const [modalNeg, setModalNegBotton] = useState('');
  const [modalPos, setModalPosBotton] = useState('');
  

  const CloseModal = (bool) => {
    setIsModal(bool);
  }

  const ActiveBg =()=>{
    if(isModal){
      return '#f5f5f5';
    }else{
      return '#F6FAFB';
    }
  }

  const Logout = (bool) => {
    setModalMsg('Are you sure you want to logout');
    setModalOption('Logout');
    setModalNegBotton('Cancel');
    setModalPosBotton('Logout');
    setIsModal(bool)
  }

  const DeleteAccount = (bool) => {
    setModalMsg('Are you sure you want to delete your account ');
    setModalOption('Delete account');
    setModalNegBotton('Cancel');
    setModalPosBotton('Delete');
    setIsModal(bool)
  }

  
  return (
    <View style={[style.container,{backgroundColor:ActiveBg()}]}>

      {/* Upper section */}
      <View style={style.upperProfile}>
        <View style={style.profileCap}>
          <Text style={{ color: '#707070', fontSize: 50 }}>J</Text>
        </View>

        <Text style={{ fontWeight: '700', fontSize: 18, color: '#333333', marginBottom: 10 }}>Joseph Anderson</Text>
        <Text style={{ fontWeight: '400', fontSize: 14, color: '#333333', marginBottom: 10 }}>Ticket Free Plan</Text>

        <TouchableOpacity style={style.smallButton}>
          <Text style={{ color: '#ffffff', fontWeight: '400' }}>Upgrade Plan</Text>
        </TouchableOpacity>
      </View>

      {/* Personal Information */}
      <View style={style.personalInfo}>
        <Text style={{ fontFamily: 'Open Sans', fontSize: 18, fontWeight: '700', color: '#333333' }}>Personal Information</Text>
        <TouchableOpacity>
          <Text style={{ fontFamily: 'Open Sans', fontSize: 18, fontWeight: '700', color: colors.primary }}>Edit</Text>
        </TouchableOpacity>
      </View>

      <View style={style.personalInfoDetails}>
        <View style={[style.personalInfo, { marginBottom: 10 }]}>
          <Text style={style.nameStyle}>Name</Text>
          <Text style={style.valueStyle}>Joseph Anderson</Text>
        </View>

        <View style={[style.personalInfo, { marginBottom: 10 }]}>
          <Text style={style.nameStyle}>Email address</Text>
          <Text style={style.valueStyle}>Josephanderson@gmail.com</Text>
        </View>

        <View style={[style.personalInfo, { marginBottom: 10 }]}>
          <Text style={style.nameStyle}>Phone number</Text>
          <Text style={style.valueStyle}>081 2345 678</Text>
        </View>
      </View>

      {/* modal dialog */}



      <Modal
        transparent={true}
        animationType='fade'
        visible={isModal}
        onRequestClose={() => CloseModal(false)}
      >
        <ModalPop
          modalMsg={modalMsg}
          modalNeg={modalNeg}
          modalPos={modalPos}
          modalOption={modalOption}
          setIsModal={CloseModal}
        />

      </Modal>



      {/* Security section */}

      <Text style={{ fontFamily: 'Open Sans', fontSize: 18, fontWeight: '700', color: '#333333', marginBottom: 5 }}>
        Security</Text>
      <View style={style.personalInfoDetails}>

        <TouchableOpacity>
          <View style={style.personalInfo}>

            <Text>Change Password</Text>

            <MaterialIcons name='keyboard-arrow-right' size={30} />
          </View>
        </TouchableOpacity>


        <TouchableOpacity>
          <View style={style.personalInfo}>
            <Text>Manage Devices</Text>
            <MaterialIcons name='keyboard-arrow-right' size={30} />
          </View>
        </TouchableOpacity>

      </View>

      {/* Logout section */}
      <View style={style.personalInfoDetails}>
        <TouchableOpacity onPress={() => Logout(true)}>
          <View style={style.personalInfo}>
            <Text style={style.actionLink}>Logout</Text>
            <MaterialIcons name='keyboard-arrow-right' size={30} />
          </View>
        </TouchableOpacity>
      </View>

      {/* Delete Account section */}
      <View style={style.personalInfoDetails}>
        <TouchableOpacity onPress={() => DeleteAccount(true)}>

          <View style={style.personalInfo}>
            <Text style={style.actionLink}>Delete account</Text>
            <MaterialIcons name='keyboard-arrow-right' size={30} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ProfileLayoutComponent

const style = StyleSheet.create({
  container: {
    height: '100%',
    padding: 20
  },
  upperProfile: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10
  },
  profileCap: {
    width: 80,
    height: 80,
    borderRadius: 100,
    backgroundColor: colors.profileCircle,
    alignItems: 'center',
    justifyContent: 'center'
  },
  personalInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  personalInfoDetails: {
    padding: 15,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    marginVertical: 8
  },
  smallButton: {
    width: 120,
    height: 48,
    borderRadius: 8,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center'
  },
  nameStyle: {
    color: '#707070',
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'Open Sans'
  },
  valueStyle: {
    color: '#333333',
    fontSize: 14,
    fontWeight: '700',
    fontFamily: 'Open Sans'
  },
  actionLink: {
    fontFamily: 'Open Sans',
    fontWeight: '600',
    fontSize: 14,
    color: '#db0004'
  }
});