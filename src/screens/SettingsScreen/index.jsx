import { useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect } from 'react';
// eslint-disable-next-line import/namespace
import { ScrollView, Text, View, TouchableOpacity, TouchableHighlight } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';

import { SettingCard, SettingOption } from '../../components';
import styles from './index.styles'; // <--- import styles from index.styles.js
import UserIcon from 'react-native-vector-icons/EvilIcons';

const SettingScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.flex}>
        <TouchableHighlight onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={20} />
        </TouchableHighlight>

        <Text style={styles.title}>Settings</Text>
      </View>
      <ScrollView style={styles.marginBottom}>
        <SettingCard>
          <SettingOption icon="user-circle-o" name="Account" />
          <SettingOption icon="home" name="Upgrade to Pro" />
          <SettingOption icon="setting" name="Settings" />
        </SettingCard>
        <SettingCard title="Personalisation">
          <SettingOption icon="paint-brush" name="Themes" />
        </SettingCard>
        <SettingCard title="Productivity">
          <SettingOption icon="bell-o" name="Notifications" />
          <SettingOption icon="clock-o" name="Reminders" screen={'Reminder'} />
        </SettingCard>
        <SettingCard title="More">
          <SettingOption icon="question-circle-o" name="Help Center" />
          <SettingOption icon="info-circle" name="About" />
          <SettingOption icon="wechat" name="Contact Us" />
        </SettingCard>

        {/* <Button title="Sign out" /> */}
      </ScrollView>
      {/* <Button title="Sign out" /> */}
    </SafeAreaView>
  );
};

export default SettingScreen;
