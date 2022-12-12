import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Paystack, paystackProps } from 'react-native-paystack-webview';
import React, { useRef, useEffect, useContext, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { AuthContext } from '../../../context/userContext';

export default function CreditCard() {
  const paystackWebViewRef = useRef(paystackProps.PayStackRef);
  const navigation = useNavigation();

  const { subscribe, userInfo } = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [phone_number, setPhoneNumber] = useState('');

  const createSubscription = () => {
    subscribe(email).then((e) => {
      navigation.navigate('Home');
      alert('Payment Successful');
    });
  };

  const init = async () => {
    setEmail(userInfo.email);
    setFirstName(userInfo.first_name);
    setLastName(userInfo.last_name);
    setPhoneNumber(userInfo.phone_number);
  };

  useEffect(() => {
    init().then((_) => paystackWebViewRef.current.startTransaction());
  }, []);

  return (
    <View>
      <Paystack
        paystackKey="pk_test_c2c7d0e27a92d2445b5161b037192f17a6b988b6"
        paystackSecretKey="sk_test_d146f7d0bf53d3ab292a3b07456d18127a114467"
        billingEmail={email}
        billingMobile={phone_number}
        billingName={`${first_name} ${last_name}`}
        activityIndicatorColor="#714DD9"
        currency ="USD"
        amount="$6.00"
        onCancel={(e) => {
          console.log(e);
        }}
        onSuccess={(res) => {
          createSubscription();
        }}
        ref={paystackWebViewRef}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
