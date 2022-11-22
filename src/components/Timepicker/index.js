import React, { useState } from 'react';
import { View, Text, Platform, TouchableOpacity } from 'react-native';
import { styles } from './styles';

import DateTimePicker from '@react-native-community/datetimepicker';

export const Timepicker = () => {
  const [isPickerShow, setIsPickerShow] = useState(false);
  const [time, setTime] = useState(new Date(Date.now()));

  const options = { hour: '2-digit', minute: '2-digit' };

  const showPicker = () => {
    setIsPickerShow(true);
  };

  const hidePicker = () => {
    setIsPickerShow(false);
  };

  const onChange = (event, value) => {
    setTime(value);
    if (Platform.OS === 'android') {
      setIsPickerShow(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Set time</Text>
      {/* Display the selected date */}
      <TouchableOpacity
        onPress={!isPickerShow ? showPicker : hidePicker}
        style={styles.pickedDateContainer}>
        <Text style={styles.pickedDate}>{time.toLocaleTimeString([], options)}</Text>
      </TouchableOpacity>

      {/* The date picker */}
      {isPickerShow && (
        <DateTimePicker
          value={time}
          mode={'time'}
          display={'spinner'}
          onChange={onChange}
          textColor="#CE2EBE"
          style={styles.datePicker}
        />
      )}
    </View>
  );
};
