import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import {
  HomeScreen,
  OtpScreen,
  SettingScreen,
  TaskScreen,
  MyProfile,
  DeleteProfile,
  EditProfileComponent,
  ReminderScreen,
} from '../screens';
import BottomTabsNavigator from './BottomTabsNavigator';

const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="BottomTabsNavigator" component={BottomTabsNavigator} />
      <Stack.Screen name="OtpScreen" component={OtpScreen} />
      <Stack.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} />
      <Stack.Screen
        options={{ headerShown: false }}
        name="DeleteProfile"
        component={DeleteProfile}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="EditProfileComponent"
        component={EditProfileComponent}
      />
      <Stack.Screen options={{ headerShown: false }} name="TaskScreen" component={TaskScreen} />

      <Stack.Screen options={{ headerShown: false }} name="Settings" component={SettingScreen} />
      <Stack.Screen options={{ headerTitle: false }} name="Profile" component={MyProfile} />
      <Stack.Screen options={{ headerShown: false }} name="Reminder" component={ReminderScreen} />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
