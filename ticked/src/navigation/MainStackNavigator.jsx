import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  HomeScreen,
  ProfileScreen,
  TaskScreen,
  TaskScreenContd,
} from "../screens";

import { OtpScreen, SettingScreen } from "../screens";
import BottomTabsNavigator from "./BottomTabsNavigator";

const Stack = createNativeStackNavigator();
const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Home"
        component={HomeScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Profile"
        component={ProfileScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="TaskScreen"
        component={TaskScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="TaskScreenContd"
        component={TaskScreenContd}
      />
      <Stack.Screen
        name="BottomTabsNavigator"
        component={BottomTabsNavigator}
      />
      <Stack.Screen name="Setting" component={SettingScreen} />
      <Stack.Screen name="OtpScreen" component={OtpScreen} />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
