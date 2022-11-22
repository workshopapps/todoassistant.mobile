import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  HomeScreen,
  ProfileScreen,
  OtpScreen,
  PasswordScreen,
  SettingScreen,
  TaskScreenContd,
  TaskScreen,
  MyProfile,
} from "../screens";
import BottomTabsNavigator from "./BottomTabsNavigator";


const Stack = createNativeStackNavigator();


const MainStackNavigator = () => {
    
    return (
    <Stack.Navigator>
      <Stack.Screen
        name="BottomTabsNavigator"
        component={BottomTabsNavigator}
      />
      <Stack.Screen name="OtpScreen" component={OtpScreen} />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Home"
        component={HomeScreen}
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
        options={{ headerShown: false }}
        name="Settings"
        component={SettingScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Profile"
        component={MyProfile}
      />

    </Stack.Navigator>
  )

};

export default MainStackNavigator;
