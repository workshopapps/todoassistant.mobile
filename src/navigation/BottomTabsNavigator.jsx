import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect } from 'react';
import Icon from 'react-native-vector-icons/Octicons';

import { HomeScreen, Notification, TaskScreen } from '../screens';
import PlusIcon from '../assets/svg/plus-icon.svg';

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
        tabBarStyle: { height: 80 },
      }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ tabBarIcon: () => <Icon size={20} name="home" />, tabBarStyle: {} }}
      />
      <Stack.Screen
        name="Create Task"
        component={TaskScreen}
        options={{
          tabBarIcon: () => <PlusIcon />,
          tabBarLabel: () => null,
          tabBarStyle: { position: 'absolute', bottom: 30, left: 0, right: 0 },
        }}
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
