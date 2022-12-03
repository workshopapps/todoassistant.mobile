import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect } from 'react';
import Icon from 'react-native-vector-icons/Octicons';
import homes from '../assets/homes.png';
import notificate from '../assets/notificate.png';

import { Text, Image } from 'react-native';

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
        tabBarStyle: { height: 70, paddingBottom: 20 },
      }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: () => <Image source={homes} style={{width: 24, height: 24}} />,
          tabBarStyle: { fontSize: 20 },
          tabBarLabel:({ focused,color })=>(<Text style={{color:focused?"#714dd9":"#707070", paddingTop: 10}}>Home</Text>)
        }}
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
        options={{
          tabBarIcon: () => <Image source={notificate} style={{width: 24, height: 24}} />,
          tabBarStyle: { fontSize: 20 },
          tabBarLabel:({ focused,color })=>(<Text style={{color:focused?"#714dd9":"#707070", paddingTop: 10}}>Notification</Text>)
        }}
      />
    </Stack.Navigator>
  );
};

export default BottomTabsNavigator;
