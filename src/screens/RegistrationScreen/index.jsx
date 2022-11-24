import DateTimePicker, { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';
import Checkbox from 'expo-checkbox';
import React, { useLayoutEffect, useState } from 'react';
// eslint-disable-next-line import/namespace
import { View, Text, ScrollView, Platform, TouchableOpacity } from 'react-native';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import styles from './index.styles'; // <--- Import the styles

const RegistrationScreen = () => {
  const navigation = useNavigation();
  const [isChecked, setChecked] = useState(false);
  const [date, setDate] = useState(new Date(1598051730000));

  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    DateTimePickerAndroid.open({
      value: date,
      mode: currentMode,
      is24Hour: true,
      onChange,
    });
  };

  const showDatePicker = () => {
    showMode('date');
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      // headerShown: false,
    });
  }, []);
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.flex_center}>
          <Text style={styles.title}>Create an Account</Text>
          <Input label="First Name" placeholder="John" style={styles.input} />
          <Input label="Last Name" placeholder="Doe" style={styles.label} />
          <Input label="Email" placeholder="doe@gmail.com" style={styles.label} />
          <Input label="Phone" placeholder="+254 **********" style={styles.label} />
          <Input label="Gender" placeholder="Male" style={styles.label} />
          <View style={styles.date_picker_view}>
            <Text style={styles.time_picker_text}>Date of Birth: </Text>
            <TouchableOpacity style={styles.datePickerStyle}>
              <Text>{date.toUTCString()}</Text>
            </TouchableOpacity>
          </View>

          <Input
            label="Password"
            placeholder="Choose a unique password"
            isPassword
            style={styles.label}
          />
          <View style={styles.check}>
            <Checkbox
              style={styles.checkbox}
              value={isChecked}
              onValueChange={setChecked}
              color={isChecked ? '#4630EB' : undefined}
            />
            <View>
              <Text style={styles.privacy}>
                By signing up, you agree to the <Text style={styles.link}>Terms of Service</Text>{' '}
                and <Text style={styles.link}>Privacy Policy</Text>
              </Text>
            </View>
          </View>
          <View style={styles.button}>
            <Button title="continue" />
            <View style={styles.login}>
              <Text style={styles.text}>Already have an account? </Text>
              <View>
                <Text style={styles.link} onPress={() => navigation.navigate('Login')}>
                  Login
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default RegistrationScreen;
