import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen, ProfileScreen, TaskScreen, TaskScreenContd } from "../screens";

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
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
