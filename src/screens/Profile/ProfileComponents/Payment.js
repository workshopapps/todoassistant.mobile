import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import card from '../../../assets/card.png';
import googlePay from '../../../assets/googlePay.png';
import otherWallets from '../../../assets/otherWallets.png';
import paypal from '../../../assets/paypal.png';
import { Button } from '../../../components/Button';

const Payment = () => {
  const navigation = useNavigation();
  const [selected, selectOption] = useState(1);

  const optionbutton = [
    {
      label: 'Credit / Debit card',
      img: card,
      value: 1,
    },
    {
      label: 'Paypal',
      img: paypal,
      value: 2,
    },
    {
      label: 'Google pay',
      img: googlePay,
      value: 3,
    },
    {
      label: 'Other Wallets',
      img: otherWallets,
      value: 4,
    },
  ];

  const pay = () => {
    switch (selected) {
      case 1:
        // trigger stripe
        navigation.navigate('CreditCard');
        break;
      case 2:
        alert('Paypal is coming soon');
        break;
      case 3:
        alert('Google pay is coming soon');
        break;
      case 4:
        // nav to wallet
        break;

      default:
        navigation.navigate('Subscription');
        break;
    }
  };

  const payments = [];

  for (let index = 0; index < optionbutton.length; index++) {
    const element = optionbutton[index];

    const myStyle = {
      height: 15,
      width: 15,
      backgroundColor: selected === element.value ? '#714DD9' : 'white',
      borderRadius: 15,
    };

    payments.push(
      <TouchableOpacity key={element.value} onPress={() => selectOption(element.value)}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            height: 52,
            width: '100%',
            backgroundColor: '#ffffff',
            borderRadius: 8,
            paddingHorizontal: 8,
          }}>
          <Image source={element.img} style={{ width: 24, height: 24 }} />
          <Text style={{ flex: 1, paddingLeft: 10 }}> {element.label} </Text>
          <View
            style={{
              height: 15,
              width: 15,
              borderRadius: 12,
              borderWidth: 2,
              padding: 10,
              borderColor: '#D3D0D9',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View style={myStyle} />
          </View>
        </View>
      </TouchableOpacity>
    );
  }

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
        paddingRight: 20,
      }}>
      {payments}
      <View
        style={{
          height: 50,
        }}
      />

      <Button onPress={() => pay()} style={{ fontSize: 14 }} title="Proceed" />
    </View>
  );
};

export default Payment;

const styles = StyleSheet.create({});
