import { View, Text, TouchableHighlight } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import Icon from 'react-native-vector-icons/Ionicons';
import styles from './index.styles';
import ReminderOption from './option';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../utils/colors';

const ReminderScreen = () => {
  const navigate = useNavigation()

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.flex}>
        <TouchableHighlight onPress={() => navigate.goBack()}>
          <Icon name="arrow-back" size={20} color={colors.primary} />
        </TouchableHighlight>
        <Text style={styles.screen_title}>Reminders</Text>
      </View>
      <View style={styles.pad_hor}>
        <ReminderOption title="Remind me via"  />
        <ReminderOption title="When snoozed ..." desc={"15 min"}  />
        <ReminderOption title="Send automatic reminders" desc="30 min before task with a due date"  />
        <ReminderOption title="Refresh Todo list" desc="Choose to refresh the list after sometime, you can set the time for your list to refresh"  />
      </View>
    </SafeAreaView>
  );
};

export default ReminderScreen;
