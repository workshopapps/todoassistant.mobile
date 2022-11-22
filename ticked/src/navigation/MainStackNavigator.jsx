import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  HomeScreen,
  ProfileScreen,
  OtpScreen,
  PasswordScreen,
} from "../screens";
import { OtpScreen, SettingScreen } from "../screens";
import BottomTabsNavigator from "./BottomTabsNavigator";


const Stack = createNativeStackNavigator();


const MainStackNavigator = () => {
    <Stack.Navigator>
      <Stack.Screen
        name="BottomTabsNavigator"
        component={BottomTabsNavigator}
      />
      <Stack.Screen name="Setting" component={SettingScreen} />
      <Stack.Screen name="OtpScreen" component={OtpScreen} />
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
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
