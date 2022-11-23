import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect } from 'react';
import Icon from 'react-native-vector-icons/Octicons';

import { HomeScreen, Notification, TaskScreen } from '../screens';

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
      }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ tabBarIcon: () => <Icon size={20} name="home" /> }}
      />
      <Stack.Screen
        name="Create Task"
        component={TaskScreen}
        options={{ tabBarIcon: () => <Icon size={20} name="plus-circle" /> }}
      />
      <Stack.Screen
        name="Notification"
        component={Notification}
        options={{ tabBarIcon: () => <Icon size={20} name="bell" /> }}
      />
    </Stack.Navigator>
  );
};

export default BottomTabsNavigator;
