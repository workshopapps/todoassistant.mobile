import { CardField, useStripe } from '@stripe/stripe-react-native';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from '../../../components/Button';

import { CardFieldInput, BillingDetails } from '@stripe/stripe-react-native';

const CreditCard = () => {
  const { confirmPayment } = useStripe();
  const { cardDetails, addCard } = useState(null);

  const handlePayPress = async () => {
    // 1. fetch Intent Client Secret from backend
    const clientSecret = await fetchPaymentIntentClientSecret(`$(BASE_URL)`);

    // 2. Gather customer billing information (ex. email)
    // const billingDetails: BillingDetails = {
    //   email: 'email@stripe.com',
    //   phone: '+48888000888',
    //   address: {
    //     city: 'Houston',
    //     country: 'US',
    //     line1: '1459  Circle Drive',
    //     line2: 'Texas',
    //     postalCode: '77063',
    //   },
    // }; // mocked data for tests

    // 3. Confirm payment with card details
    // The rest will be done automatically using webhooks
    const { error, paymentIntent } = await confirmPayment(
      clientSecret,
      {
        paymentMethodType: 'Card',
        // paymentMethodData: {
        //   billingDetails,
        // },
      },
      {
        setupFutureUsage: undefined,
      }
    );

    if (error) {
      alert(`Error code: ${error.code}`, error.message);
      console.log('Payment confirmation error', error.message);
    } else if (paymentIntent) {
      alert(
        'Success',
        `The payment was confirmed successfully! currency: ${paymentIntent.currency}`
      );
      console.log('Success from promise', paymentIntent);
    }
  };

  return (
    <View style={{ backgroundColor: '#f9f7ff', height: "100%", padding:20 }}>
      <View style={{ backgroundColor: '#f9f7ff' }}>
        <CardField
          postalCodeEnabled
          placeholders={{
            number: '4242 4242 4242 4242',
          }}
          cardStyle={{
            backgroundColor: '#FFFFFF',
            textColor: '#000000',
            borderRadius: 8
          }}
          style={{
            width: '100%',
            height: 50,
            marginVertical: 30,
          }}
          onCardChange={(c) => {
            // addCard(c);

            console.log(c);
          }}
          onFocus={(focusedField) => {
            console.log('focusField', focusedField);
          }}
        />
      </View>
      <Button onPress={() => handlePayPress()} style={{ fontSize: 14 }} title="Make payment" />
    </View>
  );
};

export default CreditCard;

const styles = StyleSheet.create({});
