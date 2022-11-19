import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  HomeScreen,
  ProfileScreen,
  OtpScreen,
  PasswordScreen,
} from "../screens";

const Stack = createNativeStackNavigator();
const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="OtpScreen" component={OtpScreen} />
      <Stack.Screen name="PasswordScreen" component={PasswordScreen} />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
