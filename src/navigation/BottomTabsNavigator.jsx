import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect } from 'react';
import Icon from 'react-native-vector-icons/Octicons';

import { HomeScreen, Notification, TaskScreen } from '../screens';
import PlusIcon from '../assets/svg/plus-icon.svg';

import { FloatingAction } from 'react-native-floating-action';

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
        tabBarLabelStyle: {
          
        },
        tabBarActiveBackgroundColor: {
          color: '#714DD9'
        }
      }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: () => <Icon size={24} name="home" color="#714DD9" />,
          tabBarStyle: { fontSize: 20 },
        }}
      />
      <Stack.Screen
        name="Create Task"
        component={TaskScreen}
        options={{
          tabBarIcon: () => <FloatingAction color='#714DD9' onPressMain={() => navigation.navigate('TaskScreen')} />,
          tabBarLabel: () => null,
          tabBarStyle: { position: 'absolute', bottom: 30, left: 0, right: 0 },
        }}
      />
      <Stack.Screen
        name="Notification"
        component={Notification}
        options={{ tabBarIcon: () => <Icon size={24} name="bell" color="#714DD9" /> }}
      />
    </Stack.Navigator>
  );
};

export default BottomTabsNavigator;
