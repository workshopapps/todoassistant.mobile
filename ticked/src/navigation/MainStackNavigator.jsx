import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen, ProfileScreen, SettingScreen } from "../screens";
import BottomTabsNavigator from "./BottomTabsNavigator";


const Stack = createNativeStackNavigator();
const MainStackNavigator = () => {
  return (
    <Stack.Navigator>

      <Stack.Screen name="BottomTabsNavigator" component={BottomTabsNavigator} />

      <Stack.Screen name="Setting" component={SettingScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="OtpScreen" component={OtpScreen} />

    </Stack.Navigator>
  );
};

export default MainStackNavigator;
