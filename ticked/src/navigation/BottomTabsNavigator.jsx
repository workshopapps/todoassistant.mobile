import { View, Text } from "react-native";
import React, { useLayoutEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "../screens";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialIcons";

const Stack = createBottomTabNavigator();

const BottomTabsNavigator = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
        headerShown: false,
    });
  }, []);
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />

      <Stack.Screen name="Create Task" component={HomeScreen} />
      <Stack.Screen name="Notification" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default BottomTabsNavigator;
